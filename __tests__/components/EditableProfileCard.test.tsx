import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PersistGateProps } from 'redux-persist/integration/react';

import { EditableProfileCard } from '@/features/editable-profile-card';

import { CountryEnum } from '@/entities/country';
import { CurrencyEnum } from '@/entities/currency';
import { Profile, profileReducer } from '@/entities/profile';

import { apiInstance } from '@/shared/api';

import { renderWithProvider } from '@/shared/lib/test';

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: (props: PersistGateProps) => props.children,
}));

const profileData: Profile = {
  id: 1,
  firstName: 'Алексей',
  lastName: 'Соловьев',
  age: 24,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Russia,
  city: 'Санкт-Петербург',
  username: 'Администратор',
};

const options = {
  initialState: {
    profileInfo: {
      profileData,
      formData: profileData,
      isLoading: false,
      error: null,
      readOnly: true,
      validationErrors: null,
    },
    userInfo: {
      authData: { id: 1, username: 'Username', password: 'Password' },
    },
  },
  asyncReducers: { profileInfo: profileReducer },
};

describe('test features/EditableProfileCard', () => {
  test('The mode should change from edit to cancel', async () => {
    renderWithProvider(<EditableProfileCard id="1" />, options);

    const buttonToEdit = screen.getByTestId('editable-profile-card-header-edit');
    await userEvent.click(buttonToEdit);

    const buttonToCancel = screen.getByTestId('editable-profile-card-header-cancel');
    expect(buttonToCancel).toBeInTheDocument();
  });

  test('Values should be reset to zero when canceling', async () => {
    renderWithProvider(<EditableProfileCard id="1" />, options);

    const buttonToEdit = screen.getByTestId('editable-profile-card-header-edit');
    await userEvent.click(buttonToEdit);

    const inputForFirstName = screen.getByTestId('firstName');
    await userEvent.clear(inputForFirstName);
    await userEvent.type(inputForFirstName, 'UserName');
    expect(inputForFirstName).toHaveValue('UserName');

    const buttonToCancel = screen.getByTestId('editable-profile-card-header-cancel');
    await userEvent.click(buttonToCancel);
    expect(inputForFirstName).toHaveValue('Алексей');
  });

  test('An error should appear if the user entered incorrect values', async () => {
    renderWithProvider(<EditableProfileCard id="1" />, options);

    const buttonToEdit = screen.getByTestId('editable-profile-card-header-edit');
    await userEvent.click(buttonToEdit);

    const inputForFirstName = screen.getByTestId('firstName');
    await userEvent.clear(inputForFirstName);

    const buttonToSave = screen.getByTestId('editable-profile-card-header-save');
    await userEvent.click(buttonToSave);

    const textError = screen.getByTestId('editable-profile-card-error-paragraph');
    expect(textError).toBeInTheDocument();
  });

  test('Must submit a request to change the data if there are no validation errors in the form', async () => {
    renderWithProvider(<EditableProfileCard id="1" />, options);

    const mockPutRequest = jest.spyOn(apiInstance, 'put');

    const buttonToEdit = screen.getByTestId('editable-profile-card-header-edit');
    await userEvent.click(buttonToEdit);

    const inputForFirstName = screen.getByTestId('firstName');
    await userEvent.type(inputForFirstName, 'UserName');

    const buttonToSave = screen.getByTestId('editable-profile-card-header-save');
    await userEvent.click(buttonToSave);
    expect(mockPutRequest).toHaveBeenCalled();
  });
});

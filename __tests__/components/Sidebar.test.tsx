import { fireEvent, screen } from '@testing-library/react';
import type { PersistGateProps } from 'redux-persist/integration/react';

import { Sidebar } from '@/widgets/sidebar';

import { renderWithProvider } from '@/shared/lib/test';

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: (props: PersistGateProps) => props.children,
}));

describe('test widgets/Sidebar', () => {
  test('Sidebar render', () => {
    renderWithProvider(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  test('Sidebar test toggles visibility', () => {
    renderWithProvider(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();

    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
  });
});

import { render, screen } from '@testing-library/react';

import { ButtonVariantEnum } from '@/shared/api';

import { Button } from '@/shared/ui';

describe('Button test', () => {
  test('Button render test with text', () => {
    render(<Button>TEXT</Button>);
    expect(screen.getByText('TEXT')).toBeInTheDocument();
  });

  test('Button render test with variant', () => {
    render(<Button variant={ButtonVariantEnum.CLEAR}>TEXT</Button>);
    expect(screen.getByText('TEXT')).toHaveClass('clear');
    screen.debug();
  });
});

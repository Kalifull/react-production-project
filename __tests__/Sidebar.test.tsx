import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from '@/widgets/sidebar';

import { renderWithTransition } from '@/shared/lib';

describe('Sidebar test', () => {
  test('Sidebar render', () => {
    renderWithTransition(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar test toggles visibility', () => {
    renderWithTransition(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();

    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);

    expect(sidebar).toHaveClass('collapsed');
  });
});

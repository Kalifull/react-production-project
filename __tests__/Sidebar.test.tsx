import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from '@/widgets/sidebar';
import renderWithComponent from '@/shared/config/test/render-with-component';

describe('Sidebar test', () => {
  test('Sidebar render', () => {
    renderWithComponent(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  test('Sidebar test toggles visibility', () => {
    renderWithComponent(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();

    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
  });
});

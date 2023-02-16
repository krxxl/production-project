import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from 'shared/lib/testing/renderWithRouter/renderWithRouter';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Sidebar render', () => {
    renderWithRouter(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Sidebar is open', () => {
    renderWithRouter(<Sidebar />);
    const button = screen.getByTestId('collapsed');
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});

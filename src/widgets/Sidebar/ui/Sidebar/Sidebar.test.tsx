import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/translation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Sidebar render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Sidebar is open', () => {
    renderWithTranslation(<Sidebar />);
    const button = screen.getByTestId('collapsed');
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});

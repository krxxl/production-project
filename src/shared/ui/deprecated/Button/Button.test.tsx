import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('Button render', () => {
    render(<Button />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  test('Button render', () => {
    render(<Button theme={ButtonTheme.CLEAR} />);
    expect(screen.getByTestId('button')).toHaveClass('clear');
  });
});

import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from '@/shared/lib/testing/renderWithRouter/renderWithRouter';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Counter render', () => {
    renderWithRouter(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId('counter')).toHaveTextContent('10');
  });

  test('COUNTER INC', () => {
    renderWithRouter(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    fireEvent.click(screen.getByTestId('counter-inc'));
    expect(screen.getByTestId('counter')).toHaveTextContent('11');
  });

  test('COUNTER INC', () => {
    renderWithRouter(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    fireEvent.click(screen.getByTestId('counter-dec'));
    expect(screen.getByTestId('counter')).toHaveTextContent('9');
  });
});

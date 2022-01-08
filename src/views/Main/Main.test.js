import { render, screen } from '@testing-library/react';
import Main from './Main';

test('Main should display a welcome message', () => {
  render(<Main />);
  screen.getByText('You are at the home page.');
});

import { render, screen } from '@testing-library/react';
import Books from './Books';

test('Books should render three titles', async () => {
  const { container } = render(<Books />);
  await screen.findByText('The Fellowship of the Ring');
  await screen.findByText('The Two Towers');
  await screen.findByText('The Return of the King');

  expect(container).toMatchSnapshot();
});

import { render, screen } from '@testing-library/react';
import Films from './Films';

test('Films should render a list of films with box office total and nominations', async () => {
  const { container } = render(<Films />);

  await screen.findByText('The Return of the King');
  await screen.findByText('Box Office Total: $1146M');
  await screen.findByText('Nominated for 11 Academy Awards');

  expect(container).toMatchSnapshot();
});

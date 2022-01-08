import { render, screen } from '@testing-library/react';
import Characters from './Characters';

test('Characters should render character cards', async () => {
  const { container } = render(<Characters />);

  await screen.findByText('Gandalf');
  await screen.findByText('Born: Before the Shaping of Arda');
  await screen.findByText('Died: 01/25/3019');

  expect(container).toMatchSnapshot();
});

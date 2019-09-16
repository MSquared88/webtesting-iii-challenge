// Test away

import React from 'react'
import { render } from 'react-testing-library'
import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';

test('should match snapshot', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});


test('shows the controls and display', () => {
    const toggleLocked = jest.fn();

    render(
      <>
          <Display locked={'locked'} closed={'closed'} />
          <Controls
            toggleLocked={toggleLocked}
            locked={'locked'}
            closed={'closed'}
          />
      </>
    );
  });

  test('defaults to unlock and open', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/unlocked/i);
  getByText(/open/i);

});
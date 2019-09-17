// Test away

import React from 'react'
import { render, fireEvent } from 'react-testing-library'
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
test("does gate button change text", () =>{

    const { getByText } = render(<Dashboard />);
    // const gateLockStatus = getByText()
    const gateStatus = getByText(/open/i)
    const gateBtn = getByText(/close gate/i)

    
    expect(gateStatus.textContent).toBe('Open')

    fireEvent.click(gateBtn)

    // expect(gateStatus.textContent).toBe('Open Gate')
    expect(gateStatus.textContent).toBe('Closed')
  })


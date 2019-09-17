// Test away!

import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Dashboard from '../dashboard/Dashboard';

test("does gate button change text", () =>{

    const { getByText } = render(<Dashboard />);
    
    const lockStatus = getByText(/unlocked/i)
    const lockBtn = getByText(/lock gate/i)

    const gateStatus = getByText(/open/i)
    const gateBtn = getByText(/close gate/i)

    expect(gateStatus.textContent).toBe('Open')
    expect(lockStatus.textContent).toBe('Unlocked')

    fireEvent.click(gateBtn)
    
    expect(gateStatus.textContent).toBe('Closed')
    expect(gateBtn.textContent).toBe('Open Gate')
    
    fireEvent.click(lockBtn)
    
    expect(lockStatus.textContent).toBe('Locked')
    expect(lockBtn.textContent).toBe('Unlock Gate')

  })



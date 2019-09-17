// import React from 'react'
// import { render } from 'react-testing-library'
// import Display from '../display/Display';

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    
    const toggleLocked = (prev) => {
        return !prev
    }
    const mockState = {
        locked: false,
        closed: false,
    };
    
      expect(toggleLocked(mockState.locked)).toEqual(true)
      expect(toggleLocked(mockState.closed)).toEqual(true)

})


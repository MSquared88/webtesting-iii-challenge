// Test away

import React from 'react'
import { render } from 'react-testing-library'
import Dashboard from './Dashboard';

test('should match snapshot', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});

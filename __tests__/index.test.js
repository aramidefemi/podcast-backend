import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from '../pages/index';

describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Home />); 
  });

  // Add more test cases as needed
});

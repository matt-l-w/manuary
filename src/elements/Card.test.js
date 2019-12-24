import React from 'react';
import Card from './Card';
import { render } from '@testing-library/react';


describe('Card', () => {
  
  test('it should render okay', () => {
    const { container, getByText } = render(
      <Card size={1}>
        <p>Here's some child text.</p>
      </Card>
    );
    
    expect(container.querySelector('div').classList).toContain('w1');
    const childText = getByText(/child text/i);
    expect(childText).toBeInTheDocument();
  })
})
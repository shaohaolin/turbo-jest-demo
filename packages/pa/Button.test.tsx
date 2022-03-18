import React from 'react'

import { render, screen } from '@testing-library/react'
import { PAButton } from './Button'

describe('tests', () => {
  it('should', () => {
    render(<PAButton />)
    expect(screen.getByText('Boop')).toBeInTheDocument()
  })
})

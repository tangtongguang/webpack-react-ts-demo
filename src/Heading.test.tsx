import React from 'react'
import { render, screen } from "@testing-library/react"
import { Heading } from './Heading'
test("Header contains correct test", () => {
  render(<Heading />)
  const text = screen.getByText("hi")
  expect(text).toBeInTheDocument();
})
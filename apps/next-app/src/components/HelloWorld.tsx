import { Button } from '@ui/button'
import React from 'react'

const HelloWorld = () => (
  <>
    <h1>Hello There!</h1>
    <label htmlFor="name">
      <input id="name" name="name" type="text" />
    </label>
    <Button />
  </>
)

export default HelloWorld

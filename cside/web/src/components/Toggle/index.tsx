import React from 'react'
import { Button } from './index.styles'

type ToggleProps = {
  children: string
}

export const Toggle: React.FC<ToggleProps> = ({ children }) => {
  return <Button>{children}</Button>
}

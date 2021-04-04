import React from 'react'
import { Button } from './index.styles'

type ActionButtonProps = {
  children: string
}

async function callAPI(): Promise<any> {
  const data = await fetch('/api/getPerson')
  console.log(await data.json())
}

export const ActionButton: React.FC<ActionButtonProps> = ({ children }) => {
  return <Button onClick={() => callAPI()}>{children}</Button>
}

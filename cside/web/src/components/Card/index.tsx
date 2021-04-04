import React from 'react'
import { Container, Box, Text } from './index.styles'

export type CardProps = {
  address?: string
  city?: string
  date_of_birth?: string
  email?: string
  first_name?: string
  gender?: string
  last_name?: string
  phone?: string
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <Container>
      <Box>
        {props && (
          <>
            <Text>{props.address}</Text>
            <Text>{props.city}</Text>
            <Text>{props.date_of_birth}</Text>
            <Text>{props.email}</Text>
            <Text>{props.first_name}</Text>
            <Text>{props.gender}</Text>
            <Text>{props.last_name}</Text>
            <Text>{props.phone}</Text>
          </>
        )}
      </Box>
    </Container>
  )
}

import styled from 'styled-components'
import { textStyles } from '../../../styles/ThemeConfig'

export const Container = styled.div`
  width: 100%;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

export const Text = styled.p`
  ${textStyles.texte}
`

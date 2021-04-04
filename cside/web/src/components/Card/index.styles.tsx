import styled from 'styled-components'
import { textStyles } from '../../../styles/ThemeConfig'

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

export const Text = styled.p`
  ${textStyles.texte}
`

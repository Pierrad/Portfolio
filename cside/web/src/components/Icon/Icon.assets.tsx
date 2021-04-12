import React from 'react'
import styled from 'styled-components'

export const iconsKeys = {
  Sun: 'Sun',
  Moon: 'Moon',
}

type IconWrapperProps = {
  SVG: string
  width: number
  height: number
}

const IconWrapper = ({ SVG, width, height }: IconWrapperProps): React.ReactElement => {
  const IconWrapperStyles = styled.div`
    img: {
      width: ${width / 10}rem;
      height: ${height / 10}rem;
    }
  `

  return (
    <IconWrapperStyles>
      <img src={`icons/${SVG}.svg`} alt={`An icon of ${SVG}`} />
    </IconWrapperStyles>
  )
}

export const icons = {
  [iconsKeys.Sun]: IconWrapper({ SVG: 'sun', width: 22, height: 22 }),
  [iconsKeys.Moon]: IconWrapper({ SVG: 'moon', width: 32, height: 32 }),
}

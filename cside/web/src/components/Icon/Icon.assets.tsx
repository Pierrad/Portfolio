import React from 'react'
import styled from 'styled-components'

import Sun from './icons/sun.svg'
import Moon from './icons/moon.svg'

export const iconsKeys = {
  Sun: 'Sun',
  Moon: 'Moon',
}

type IconWrapperProps = {
  Component: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  width: number
  height: number
}

const IconWrapper: React.FC<IconWrapperProps> = ({ Component, width, height }) => {
  const IconWrapperStyles = styled.div`
    icon: {
      width: ${width / 10}rem;
      height: ${height / 10}rem;
    }
    asset: {
      width: '100%';
      height: '100%';
      display: 'inline-block';
    }
  `

  return (
    <IconWrapperStyles>
      <Component />
    </IconWrapperStyles>
  )
}

export const icons = {
  [iconsKeys.Sun]: IconWrapper(Sun, 22, 22),
  [iconsKeys.Moon]: IconWrapper(Moon, 32, 32),
}

export default icons

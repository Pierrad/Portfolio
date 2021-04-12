import React from 'react'

import { icons } from './Icon.assets'
import { IconStyle } from './styled'

type IconProps = {
  icon: string
}

const Icon: React.FC<IconProps> = (props) => {
  const { icon } = props

  const IconComponent = icons[icon]

  return <IconStyle>{IconComponent}</IconStyle>
}

export default Icon

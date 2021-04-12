import React from 'react'
import useDarkMode from 'use-dark-mode'
import Switch from 'react-switch'

import { IconStyles } from './styled'
import { iconsKeys } from '../Icon/Icon.assets'

export const ToggleTheme: React.FC = () => {
  const darkmode = useDarkMode(true)

  const handleChange = (): void => {
    darkmode.toggle()
  }

  return (
    <Switch
      onChange={handleChange}
      width={50}
      checked={darkmode.value}
      uncheckedIcon={<></>}
      checkedIcon={<></>}
      uncheckedHandleIcon={<IconStyles icon={iconsKeys.Sun} />}
      checkedHandleIcon={<IconStyles icon={iconsKeys.Moon} />}
      offColor="#F6AE2D"
      onColor="#7B61FF"
      offHandleColor="#FFFFFF"
      onHandleColor="#FFFFFF"
    />
  )
}

export default ToggleTheme

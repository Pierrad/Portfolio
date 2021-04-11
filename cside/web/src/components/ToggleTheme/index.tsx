import React from 'react'
import useDarkMode from 'use-dark-mode'
import Switch from 'react-switch'

import Icon from '../Icon'
import { iconsKeys } from '../Icon/Icon.assets'

export const ToggleTheme: React.FC = () => {
  const darkmode = useDarkMode(true)

  const handleChange = (): void => {
    darkmode.toggle()
  }

  return (
    <Switch
      onChange={handleChange}
      checked={darkmode.value}
      uncheckedHandleIcon={<Icon icon={iconsKeys.Moon} />}
      checkedHandleIcon={<Icon icon={iconsKeys.Sun} />}
    />
  )
}

export default ToggleTheme

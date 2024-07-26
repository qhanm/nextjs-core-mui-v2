// ** mui theme
import { common } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { ITheme } from 'types/common'

// https://m2.material.io/inline-tools/color/
const colorModes = {
  light: {
    primary: '#8479F2',
    secondary: '#B2B4B8',
    error: '#ED6F70',
    warning: '#FFAB5A',
    info: '#1FD5EB',
    success: '#42CE80',
    text: common['white']
  },
  dark: {
    primary: '#655BD3',
    secondary: '#949699',
    error: '#CE4A4B',
    warning: '#E08C3B',
    info: '#00B6CC',
    success: '#23AF62',
    text: common['black']
  },
  main: {
    primary: '#7367F0',
    secondary: '#A8AAAE',
    error: '#EA5455',
    warning: '#FF9F43',
    info: '#00CFE8',
    success: '#28C76F',
    text: common['black']
  }
}

export const createCustomTheme = (mode: ITheme) => {
  const colors = colorModes[mode]

  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary
      },
      secondary: { main: colors.secondary },
      error: { main: colors.secondary },
      warning: { main: colors.secondary },
      info: { main: colors.secondary },
      success: { main: colors.secondary },
      grey: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#F5F5F5',
        A200: '#EEEEEE',
        A400: '#BDBDBD',
        A700: '#616161'
      },
      text: {
        primary: `rgba(${colors.text}, 0.78)`,
        secondary: `rgba(${colors.text}, 0.68)`,
        disabled: `rgba(${colors.text}, 0.42)`
      }
    },
    typography: {},
    components: {}
  })
}

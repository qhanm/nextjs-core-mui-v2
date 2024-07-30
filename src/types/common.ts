import THEME from 'configs/theme'
import { LOADING_STATUS_ENUM } from 'enums'

export type ITheme = THEME.DARK | THEME.LIGHT

export type ObjectLiteral = {
  [key: string]: any
}

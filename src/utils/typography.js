import Typography from 'typography'
import elkGlenTheme from 'typography-theme-elk-glen'

elkGlenTheme.baseFontSize = '16px'

const typography = new Typography(elkGlenTheme)

export const { scale, rhythm, options } = typography
export default typography

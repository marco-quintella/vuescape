export const defaultSizesMap = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
}
export const defaultSizes = Object.keys(defaultSizesMap)
export type DefaultSizes = keyof typeof defaultSizesMap

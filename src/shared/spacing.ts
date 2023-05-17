import { checkValidStringValue } from '@vuescape/vuescape/shared'

const defaultMargin = ['m', 'mt', 'mr', 'mb', 'ml']

export interface DefaultMargin {
  m?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
}

export function spacingArgsType() {
  return defaultMargin.reduce((
    acc,
    curr) => {
    acc[curr] = {
      control: 'text',
    }
    return acc
  }, {} as Record<typeof defaultMargin[number], any>)
}

export function calculateMargin(props: DefaultMargin) {
  let _ = ''
  const std = checkValidStringValue(props.m) ? props.m : '0'
  checkValidStringValue(props.mt)
    ? _ += `${props.mt} `
    : _ += `${std} `
  checkValidStringValue(props.mr)
    ? _ += `${props.mr} `
    : _ += `${std} `
  checkValidStringValue(props.mb)
    ? _ += `${props.mb} `
    : _ += `${std} `
  checkValidStringValue(props.ml)
    ? _ += `${props.ml}`
    : _ += `${std}`
  return _
}

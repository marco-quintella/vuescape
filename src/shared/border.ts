import { checkValidStringValue } from '@vuescape/vuescape/shared'

const defaultBorderRadius = ['bRd', 'bRdT', 'bRdR', 'bRdB', 'bRdL', 'bRdTl', 'bRdTr', 'bRdBl', 'bRdBr']

export interface DefaultBorderRadius {
  'bRd'?: string
  'bRdT'?: string
  'bRdR'?: string
  'bRdB'?: string
  'bRdL'?: string
  'bRdTl'?: string
  'bRdTr'?: string
  'bRdBl'?: string
  'bRdBr'?: string
}

export function borderRadiusArgsType() {
  return defaultBorderRadius.reduce((
    acc,
    curr) => {
    acc[curr] = {
      control: 'text',
    }
    return acc
  }, {} as Record<typeof defaultBorderRadius[number], any>)
}

export function calculateBorderRadius(props: DefaultBorderRadius) {
  let _ = ''
  const std = checkValidStringValue(props.bRd) ? props.bRd : '0'
  const stdT = checkValidStringValue(props.bRdT) ? props.bRdT : undefined
  const stdR = checkValidStringValue(props.bRdR) ? props.bRdR : std
  const stdB = checkValidStringValue(props.bRdB) ? props.bRdB : undefined
  const stdL = checkValidStringValue(props.bRdL) ? props.bRdL : std

  checkValidStringValue(props.bRdTl)
    ? _ += `${props.bRdTl} `
    : _ += `${stdT ?? stdL} `
  checkValidStringValue(props.bRdTr)
    ? _ += `${props.bRdTr} `
    : _ += `${stdT ?? stdR} `
  checkValidStringValue(props.bRdBr)
    ? _ += `${props.bRdBr} `
    : _ += `${stdB ?? stdR} `
  checkValidStringValue(props.bRdBl)
    ? _ += `${props.bRdBl}`
    : _ += `${stdB ?? stdL}`
  return _
}

export function checkValidStringValue(v?: string): v is string {
  return v !== undefined && v !== null && v.trim() !== ''
}

let _isDisallowedContextReadInDEV: boolean = false;

export function isDisallowedContextReadInDEV(): void {
  return _isDisallowedContextReadInDEV;
}
export function enterDisallowedContextReadInDEV(): void {
  if (__DEV__) {
    _isDisallowedContextReadInDEV = true;
  }
}

export function exitDisallowedContextReadInDEV(): void {
  if (__DEV__) {
    _isDisallowedContextReadInDEV = false;
  }
}

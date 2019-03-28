export function toBoolean(b?:boolean, defaultValue:boolean = false) {
    return b !== undefined ? b : defaultValue;
}

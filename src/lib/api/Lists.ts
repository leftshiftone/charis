export const emptyIfNull = (list:any[]) => (list === undefined || list === null) ? [] : list;
export const size = (list:any[]) => (list === undefined || list === null) ? 0 : list.length;
export const last = (list:any[]) => list.slice(-1)[0];

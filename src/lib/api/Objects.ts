export const isEmpty = (obj: any) => {
    if (obj === undefined || obj === null) {
        return true;
    }
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }
    return Object.keys(obj).length === 0;
};
export const isNotEmpty = (obj: any) => {
    return !isEmpty(obj);
};

export const keys = (obj:any) => obj ? Object.keys(obj) : [];

export const get = (obj:any, key:string) => obj ? obj[key] : obj;
export const isEqual = (obj1:any, obj2:any):boolean => {
    if (!obj1 || !obj2) {
        return false;
    }
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};
export const isNull = (obj:any) => obj === undefined || obj === null;
export const isNotNull = (obj:any) => !isNull(obj);

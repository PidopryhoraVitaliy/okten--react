export const retrieveLocalStorage = <T>(key: string) => {
    const value: string = localStorage.getItem(key) || '';
    if (!value) return {} as T;
    return JSON.parse(value) as T;
}
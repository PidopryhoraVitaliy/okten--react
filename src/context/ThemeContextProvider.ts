import {createContext} from "react";

type ContentValueType = {
    theme: string;
    changeTheme: (theme: string) => void;
}

const defaultValue: ContentValueType = {
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme)
    },
}

export const ThemeContextProvider = createContext<ContentValueType>(defaultValue);
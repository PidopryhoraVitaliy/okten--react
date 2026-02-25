import {useContext} from "react";
import {ThemeContextProvider} from "../context/ThemeContextProvider.ts";

export const LeftBranchBottom = () => {
    const {changeTheme} = useContext(ThemeContextProvider);

    const handlerDarkTheme = () => {
        changeTheme('dark');
    }
    const handlerLightTheme = () => {
        changeTheme('light');
    }

    return (
        <div className={'item-wrapper'}>
            <p>LeftBranchBottom</p>
            <button onClick={handlerDarkTheme}>dark theme</button>
            <button onClick={handlerLightTheme}>light theme</button>
        </div>
    );
};
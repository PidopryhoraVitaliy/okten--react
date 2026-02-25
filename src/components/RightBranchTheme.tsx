import {useContext} from "react";
import {ThemeContextProvider} from "../context/ThemeContextProvider.ts";

export const RightBranchTheme = () => {
    const {theme} = useContext(ThemeContextProvider);

    return (
        <div className={`item-wrapper theme-${theme}`}>
            <p className={'theme-target'}>RightBranchTheme</p>
        </div>
    );
};
import './App.css'
import {LeftBranch} from "./components/LeftBranch.tsx";
import {RightBranch} from "./components/RightBranch.tsx";
import {ThemeContextProvider} from "./context/ThemeContextProvider.ts";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState<string>('light');

    return (
        <ThemeContextProvider.Provider value={{
            theme,
            changeTheme: (themeValue: string) => {
                console.log(themeValue)
                setTheme(themeValue);
            }
        }}>
            <div className="app-wrapper">
                <LeftBranch/>
                <RightBranch/>
            </div>
        </ThemeContextProvider.Provider>
    )
}

export default App

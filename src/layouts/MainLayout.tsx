import './MainLayout.css';
import {Outlet} from "react-router-dom";
import {Menu} from "../menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <>
            MainLayout
            <Menu/>
            <hr/>
            <Outlet/>
        </>
    );
};
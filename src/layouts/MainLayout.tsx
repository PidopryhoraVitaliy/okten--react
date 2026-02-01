import './MainLayout.css';
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            MainLayout
            {/*<Menu/>*/}
            <hr/>
            <Outlet/>
        </>
    );
};
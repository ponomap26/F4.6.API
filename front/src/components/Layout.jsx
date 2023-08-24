import React from "react";
import {NavLink , Outlet} from "react-router-dom";
import "../styles/Layout.css"
// const setActive = ({isActive})=>isActive ? 'active-link':""

function Layout(){
    return(
        <>

            <header className={"header-link"}>
                <h1 className={'h1-list'}> Рецепты</h1>

                <NavLink to="/" className={"active-link"}>Главная</NavLink>
                <NavLink className={"active-link"} to="/reciept">Рецепт</NavLink>
                <NavLink className={"active-link"} to="/about">О нас</NavLink>
            </header>
            <Outlet />
            <footer className={"footer-link"}>
                2023 г.
            </footer>

        </>

    )
}

export default Layout
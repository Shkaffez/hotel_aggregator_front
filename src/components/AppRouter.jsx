import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { authRoutes, publicRoutes } from "../routes";

export const AppRouter = (props) => {
    const idAuth = false

    return (
        <Routes>
            {idAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )}

            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )}

            <Route path="*" element={<MainPage />} />
        </Routes>
    )
};
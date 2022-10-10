import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "..";
import { MainPage } from "../pages/MainPage";
import { authRoutes, publicRoutes } from "../routes";

export const AppRouter = observer((props) => {
	const { user } = useContext(Context);

	return (
		<Routes>
			{user.user.role == 'admin' && authRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}

			{publicRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}

			<Route path="*" element={<MainPage />} />
		</Routes>
	)
});
import routes from "./routes";
import "./styles/globals.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
	return (
		<>
			<Routes>
				{routes.map((route, index) => (
					<Route
						key={`route-${index}`}
						path={route.path}
						element={route.component}
					/>
				))}
			</Routes>
		</>
	);
};

export default App;

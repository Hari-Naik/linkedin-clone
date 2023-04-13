
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";


function App() {
	return (
		<div>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/" element={<Home />} />
					<Route path="/in/:user" element={<Profile />} />
				</Route>
			</Routes>

		</div>
	);
}

export default App;

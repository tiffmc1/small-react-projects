import "./App.css";
import Home from "./Home";
import Counter from "./projects/incrementCounter/Counter";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<>
			<nav className="app-nav">
				<Link to="/">Home</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/counter" element={<Counter />} />
			</Routes>
		</>
	);
}

export default App;

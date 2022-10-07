import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Counter from "./projects/incrementCounter/Counter";
import DataFetch from "./projects/dataFetch/DataFetch";
import "./App.css";

function App() {
	return (
		<>
			<nav className="app-nav">
				<Link to="/">Home</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/dataFetch" element={<DataFetch />} />
				<Route path="/albums" />
			</Routes>
		</>
	);
}

export default App;

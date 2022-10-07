import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Counter from "./projects/counter/Counter";
import DataFetch from "./projects/dataFetchUsers/DataFetch";
import Posts from "./projects/dataFetchPosts/Posts";
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
				<Route path="/posts" element={<Posts />} />
			</Routes>
		</>
	);
}

export default App;

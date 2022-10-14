import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Counter from "./projects/counter/Counter";
import DataFetch from "./projects/dataFetchUsers/DataFetch";
import Posts from "./projects/dataFetchPosts/Posts";
import Form from "./projects/inputForm/Form";
import Carousel from "./projects/carousel/Carousel";
import HexGuess from "./projects/hex-guess/HexGuess";
import TaskList from "./projects/taskList/components/TaskList";
import "./App.css";

function App() {
	return (
		<>
			<div className="app-nav">
				<nav className="nav-wrapper">
					<Link to="/">Home</Link>
				</nav>
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/task-list" element={<TaskList />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/dataFetch" element={<DataFetch />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/form" element={<Form />} />
				<Route path="/carousel" element={<Carousel />} />
				<Route path="/hex-guess" element={<HexGuess />} />
			</Routes>
		</>
	);
}

export default App;

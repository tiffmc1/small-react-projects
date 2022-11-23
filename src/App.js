import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import TaskList from "./projects/taskList/components/TaskList";
import HexGuess from "./projects/hex-guess/HexGuess";
import Keypad from "./projects/keypad-permutations/Components/Keypad";
import DataFetch from "./projects/dataFetchUsers/DataFetch";
import Posts from "./projects/dataFetchPosts/Posts";
import Carousel from "./projects/carousel/Carousel";
import Counter from "./projects/counter/Counter";
import "./App.css";

// currently not in use
//import Form from "./projects/inputForm/Form";

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
				<Route path="/hex-guess" element={<HexGuess />} />
				<Route path="/keypad-permutations" element={<Keypad />} />
				<Route path="/dataFetch" element={<DataFetch />} />
				<Route path="/posts" element={<Posts />} />
				{/* <Route path="/form" element={<Form />} /> */}
				<Route path="/carousel" element={<Carousel />} />
				<Route path="/counter" element={<Counter />} />
			</Routes>
		</>
	);
}

export default App;

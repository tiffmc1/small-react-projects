import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
	return (
		<div className="home-container">
			<Link to="/counter">Counter</Link>
			<Link to="/dataFetch">Data Fetching: Random Users</Link>
			<Link to="/posts">Data Fetching: Posts</Link>
			<Link to="/form">Multi-Step Input Form</Link>
			<Link to="/carousel">Carousel</Link>
		</div>
	);
};

export default Home;

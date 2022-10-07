import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
	return (
		<div className="home-container">
			<Link to="/counter">Increment Count</Link>
			<Link to="/dataFetch">Data Fetching: Random Users</Link>
			<Link to="/posts">Data Fetching: Posts</Link>
		</div>
	);
};

export default Home;

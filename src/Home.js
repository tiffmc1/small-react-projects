import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
	return (
		<div className="home-container">
			<Link to="/counter">Increment Count</Link>
			<Link to="/dataFetch">Data Fetching: Random Users</Link>
			<Link to="/albums">Data Fetching: Albums</Link>
		</div>
	);
};

export default Home;

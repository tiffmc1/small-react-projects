import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
	return (
		<div className="home-container">
			<Link to="/counter">Increment Count</Link>
		</div>
	);
};

export default Home;
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
	return (
		<div className="home-container">
			<div className="home-link-wrapper">
				<div className="home-header">Small Projects Using React</div>
				<Link to="/task-list" className="home-link">
					"Hunny, Do..." List
				</Link>
				<Link to="/hex-guess" className="home-link">
					Hex-Guess Game
				</Link>
				<Link to="/keypad-permutations" className="home-link">
					Keypad Permutations
				</Link>
				<Link to="/dataFetch" className="home-link">
					Data Fetching: Random Users
				</Link>
				<Link to="/posts" className="home-link">
					Data Fetching: Posts
				</Link>
				{/* <Link to="/form" className="home-link">
					Multi-Step Input Form
				</Link> */}
				<Link to="/carousel" className="home-link">
					Carousel
				</Link>
				<Link to="/counter" className="home-link">
					Counter
				</Link>
			</div>
		</div>
	);
};

export default Home;

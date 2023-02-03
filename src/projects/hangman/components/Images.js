import "../hangman.css";

const Images = ({ chancesImg }) => {
	return (
		<div className="hangman-img-wrapper">
			<div className="hangman-img">
				{chancesImg ? (
					<img
						src={require(`../images/hangman-${chancesImg}.png`)}
						alt=""
						height={350}
						width={250}
					/>
				) : (
					<img
						src={require("../images/hangman-0.png")}
						alt=""
						height={350}
						width={250}
					/>
				)}
			</div>
		</div>
	);
};

export default Images;

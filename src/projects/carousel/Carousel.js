import { useState } from "react";
import "../carousel/carousel.css";

const Carousel = () => {
	const [count, setCount] = useState(1);

	return (
		<div className="wrapper">
			<div className="element-container">
				<div className={`${count === 1 ? "element red" : "element"}`} />
				<div className={`${count === 2 ? "element red" : "element"}`} />
				<div className={`${count === 3 ? "element red" : "element"}`} />
			</div>
			<div className="button-container">
				<button
					id="button-left"
					type="button"
					onClick={() => (count > 1 ? setCount(count - 1) : setCount(3))}
				>
					{"<"}
				</button>
				<button id="button-reset" type="button" onClick={() => setCount(1)}>
					reset
				</button>
				<button
					id="button-right"
					type="button"
					onClick={() => (count < 3 ? setCount(count + 1) : setCount(1))}
				>
					{">"}
				</button>
			</div>
		</div>
	);
};

export default Carousel;

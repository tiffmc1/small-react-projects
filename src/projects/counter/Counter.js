import { useState } from "react";
import "./counter.css";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		const increment = count + 1;
		setCount(increment);
	};

	const handleDecrement = () => {
		const decrement = count - 1;
		setCount(decrement);
	};

	return (
		<>
			<div className="counter-container">
				<div className="counter-heading">Counter</div>
				<div className="counter-counter">{count}</div>
				<button className="counter-button" onClick={handleIncrement}>
					Increment
				</button>
				<button className="counter-button" onClick={handleDecrement}>
					Decrement
				</button>
			</div>
		</>
	);
};

export default Counter;

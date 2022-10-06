import { useState } from "react";
import "../incrementCounter/counter.css";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		const increment = count + 1;
		setCount(increment);
	};

	return (
		<>
			<div className="counter-container">
				<div className="counter-heading">Increment Count</div>
				<div className="counter-counter">{count}</div>
				<button className="counter-button" onClick={handleIncrement}>
					Increment
				</button>
			</div>
		</>
	);
};

export default Counter;

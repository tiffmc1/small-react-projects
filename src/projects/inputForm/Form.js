import { useState, useEffect } from "react";
import "../inputForm/form.css";

const Form = (steps) => {
	const [currentStepIdx, setCurrentStepIdx] = useState(0);

	return (
		<>
			{currentStepIdx}
			<div>{steps[currentStepIdx]}</div>
		</>
	);
};

export default Form;

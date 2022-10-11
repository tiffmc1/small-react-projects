import "../stylesheets/task.css";

const Task = ({ task, handleToggleBox }) => {
	const handleToggle = () => {
		handleToggleBox(task.id);
	};

	return (
		<>
			<div className="task-wrapper">
				<input
					type="checkbox"
					onChange={handleToggle}
					checked={task.completed}
					className="task-checkbox"
				/>
				{task.name}
			</div>
		</>
	);
};

export default Task;

import "../taskList/task.css";

const Task = ({ task, handleToggleBox }) => {
	const handleToggle = () => {
		handleToggleBox(task.id);
	};

	return (
		<>
			<div className="task-ind">
				<input
					type="checkbox"
					onChange={handleToggle}
					checked={task.completed}
				/>
				{task.name}
			</div>
		</>
	);
};

export default Task;

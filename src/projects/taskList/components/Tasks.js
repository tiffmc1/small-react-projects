import Task from "./Task";
import "../stylesheets/tasks.css";

const Tasks = ({ tasks, handleToggleBox }) => {
	return (
		<>
			<div className="tasks-wrapper">
				{tasks.map((task) => (
					<Task key={task.id} task={task} handleToggleBox={handleToggleBox} />
				))}
			</div>
		</>
	);
};

export default Tasks;

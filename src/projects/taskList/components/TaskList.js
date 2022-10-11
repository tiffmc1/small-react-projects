import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Tasks from "./Tasks";
import "../stylesheets/taskList.css";

const TASK_LIST_KEY = "TASK_LIST_KEY";

const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const inputRef = useRef(null);

	useEffect(() => {
		const getTasksFromLocalStore = JSON.parse(
			localStorage.getItem(TASK_LIST_KEY)
		);

		// will not persist without this statement
		if (getTasksFromLocalStore.length > 0) setTasks(getTasksFromLocalStore);
	}, []);

	useEffect(() => {
		localStorage.setItem(TASK_LIST_KEY, JSON.stringify(tasks));
	}, [tasks]);

	const handleAddTask = () => {
		const inputTask = inputRef.current.value;

		if (inputTask === "") return;

		setTasks((prevTasks) => [
			...prevTasks,
			{ name: inputTask, id: uuidv4(), completed: false },
		]);

		inputRef.current.value = null;
	};

	const handleClearTasks = () => {
		const copiedTasks = [...tasks];

		const uncompletedTasks = copiedTasks.filter(
			(task) => task.completed === false
		);

		setTasks(uncompletedTasks);
	};

	const handleToggleBox = (taskId) => {
		// should make a copy in order to avoid the direct modification of the tasks list
		const copiedTasks = [...tasks];

		const toggleTask = copiedTasks.find((task) => task.id === taskId);

		toggleTask.completed = !toggleTask.completed;

		setTasks(copiedTasks);
	};

	return (
		<div className="task-list-container">
			<div className="task-list-wrapper">
				<h1 className="task-list-header">"Hunny, Do..." List</h1>
				<Tasks tasks={tasks} handleToggleBox={handleToggleBox} />
				<input type="text" ref={inputRef} className="task-list-input" />
				<div className="btn-wrapper">
					<button onClick={handleAddTask} className="task-list-btn">
						Add Task
					</button>
					<button onClick={handleClearTasks} className="task-list-btn">
						Clear Completed Tasks
					</button>
				</div>
				<div className="task-list-remainders">
					{tasks.length < 2
						? `${tasks.length} Task Remaining`
						: `${tasks.length} Tasks Remaining`}
				</div>
			</div>
		</div>
	);
};

export default TaskList;

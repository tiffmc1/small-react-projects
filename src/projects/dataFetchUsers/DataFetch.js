import { useEffect, useState, useCallback } from "react";
import { fetchUserData } from "./api";
import "../dataFetchUsers/dataFetch.css";

// 1. Use the api below to fetch this user's data and display it on the web page
// 2. Then, use that gathered data, and display the user's name and picture on the page
// 3. Create a button that, when clicked, presents you with another user's data

// https://randomuser.me/api

const DataFetch = () => {
	const [randomUserJSON, setRandomUserJSON] = useState("");
	const [userResults, setUserResults] = useState([]);
	const [nextPageNum, setNextPageNum] = useState(1);

	const fetchNextUser = useCallback(() => {
		fetchUserData(nextPageNum).then((userData) => {
			setRandomUserJSON(JSON.stringify(userData, null, 2) || "No User Data");
			// can just return the data object, but by including "null, 2," along with the "pre" tag below, this formats the data in an easier-to-read way. Delete these factors and see how the data is presented

			const appendUser = [...userResults, ...userData.results];
			setUserResults(appendUser);

			setNextPageNum(userData.info.page + 1);
		});
	}, [nextPageNum, userResults]);

	useEffect(() => {
		fetchNextUser();
	}, []);

	return (
		<>
			<div className="users-header">Random Person Generator</div>
			<div className="users-wrapper">
				{userResults.map((user, idx) => (
					<div key={idx} className="users-ind">
						<img src={user.picture.large} alt="" />
						<div className="users-name">
							{user.name.first} {user.name.last}
						</div>
					</div>
				))}
				{/* <pre>{randomUserJSON}</pre> */}
			</div>
			<div className="users-btn-wrapper">
				<button onClick={fetchNextUser} className="users-btn">
					Next User
				</button>
			</div>
		</>
	);
};

export default DataFetch;

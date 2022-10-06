import axios from "axios";
import { useEffect, useState } from "react";

// Use the api below to fetch this user's data and display it on the web page
// https://randomuser.me/api

const fetchUserData = async () => {
	return await axios
		.get("https://randomuser.me/api")
		.then(({ data }) => {
			console.log(data.results);
			return JSON.stringify(data, null, 2); // can just return the data object, but including "null, 2," along with the "pre" tag, formats the data in an easier-to-read way. Delete these factors and see how the data is presented
		})
		.catch((err) => {
			console.log(err);
		});
};

const DataFetch = () => {
	const [randomUserData, setRandomUserData] = useState("");

	useEffect(() => {
		fetchUserData().then((userData) => {
			setRandomUserData(userData || "No User Data");
		});
	}, []);

	return (
		<>
			<pre>{randomUserData}</pre>
			{/* {randomUserData.results.map((user, idx) => (
				<div key={idx}>{user.name}</div>
			))} */}
		</>
	);
};

export default DataFetch;

import axios from "axios";

export const fetchUserData = async (pageNumber) => {
	return await axios
		.get(`https://randomuser.me/api?page=${pageNumber}`)
		.then(({ data }) => {
			//console.log(data);
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
};

import axios from "axios";

export const fetchUserData = async () => {
	return await axios
		.get("https://randomuser.me/api")
		.then(({ data }) => {
			//console.log(data);
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
};

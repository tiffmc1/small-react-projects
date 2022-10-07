import { useState, useEffect } from "react";
import "./posts.css";

// Fetch data from the given API and display it on the page

// "https://jsonplaceholder.typicode.com/posts?_limit=10"

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts?_limit=10"
			);

			const data = await response.json();
			setPosts(data);
		};
		fetchPosts();
	}, []);

	return (
		<>
			<div className="post-container">
				<h1 className="post-header">Posts</h1>
				{posts.map((post) => (
					<div key={post.id} className="post-wrapper">
						<div className="post-userId">Author: {post.userId}</div>
						<div className="post-title">{post.title}</div>
						<div className="post-body">{post.body}</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Posts;

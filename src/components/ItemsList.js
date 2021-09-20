import React, { useState, useEffect } from "react";
import Api from "../utils/api";
import Item from "./Item";

const ItemsList = ({ type }) => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const params = { purchased: type === "purchased" };
		setLoading(true);
		Api.listItems(params)
			.then((response) => {
				setItems(response.data.data);
			})
			.catch((error) => {
				console.error(error);
				setError(true);
			});
		setLoading(false);
	});

	return (
		<>
			<div className="items-list">
				{items.map((item) => (
					<Item key={item._id} item={item} />
				))}
			</div>
		</>
	);
};

export default ItemsList;

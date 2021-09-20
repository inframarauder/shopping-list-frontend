import React, { useState, useEffect, useContext } from "react";
import { Spinner } from "react-bootstrap";
import Api from "../utils/api";
import Item from "./Item";
import { Context as ItemsContext } from "../contexts/ItemsContext";

const ItemsList = ({ purchased }) => {
	const { state, listItems } = useContext(ItemsContext);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const params = { purchased: purchased || false };
		listItems(params, () => setLoading(false));
	}, [purchased]);

	return loading ? (
		<Spinner animation="border" variant="primary" />
	) : (
		<>
			<div className="items-list">
				{state.items.map((item) => (
					<Item key={item._id} item={item} />
				))}
			</div>
		</>
	);
};

export default ItemsList;

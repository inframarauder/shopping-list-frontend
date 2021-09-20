import React, { useEffect, useContext } from "react";
import { Spinner } from "react-bootstrap";
import Item from "./Item";
import { Context as ItemsContext } from "../contexts/ItemsContext";

const ItemsList = ({ purchased }) => {
	const { state, listItems } = useContext(ItemsContext);

	useEffect(() => listItems({ purchased: purchased || false }), [purchased]);

	return state.loading ? (
		<Spinner animation="border" variant="primary" />
	) : (
		<>
			<div className="items-list">
				<legend className="text-center">{state.message}</legend>
				{state.items.map((item) => (
					<Item key={item._id} item={item} />
				))}
			</div>
		</>
	);
};

export default ItemsList;

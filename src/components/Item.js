import React, { useContext } from "react";
import { Context as ItemsContext } from "../contexts/ItemsContext";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Api from "../utils/api";

const Item = ({ item }) => {
	const { listItems } = useContext(ItemsContext);

	const markAsPurchased = (id) => {
		Api.updateItem(id, { purchased: true })
			.then((res) => {
				console.log(res.data.message);
				listItems({ purchased: false });
			})
			.catch((err) => {
				console.error(err);
				if (err.response.data.message) {
					alert(err.response.data.message);
				}
			});
	};

	const deleteItem = (id) => {
		if (window.confirm("Are you sure you want to delete this item?")) {
			Api.deleteItem(id)
				.then(() => {
					listItems({ purchased: true });
				})
				.catch((err) => {
					console.error(err);
					if (err.response.data.message) {
						alert(err.response.data.message);
					}
				});
		}
	};

	return (
		<div className="item">
			<div className="item-name">
				{item.itemName}

				<div className="item-icons">
					{item.purchased ? (
						<OverlayTrigger
							placement="bottom"
							overlay={<Tooltip id="purchased">Delete Item</Tooltip>}
						>
							<i
								className="fa fa-trash delete-icon"
								aria-hidden="true"
								onClick={() => deleteItem(item._id)}
							></i>
						</OverlayTrigger>
					) : (
						<OverlayTrigger
							placement="bottom"
							overlay={<Tooltip id="pending">Mark as Purchased</Tooltip>}
						>
							<i
								className="fa fa-check tick-icon"
								aria-hidden="true"
								onClick={() => markAsPurchased(item._id)}
							></i>
						</OverlayTrigger>
					)}
				</div>
			</div>
		</div>
	);
};

export default Item;

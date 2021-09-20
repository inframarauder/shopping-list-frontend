import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Item = ({ item }) => {
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
							<i className="fa fa-trash delete-icon" aria-hidden="true"></i>
						</OverlayTrigger>
					) : (
						<OverlayTrigger
							placement="bottom"
							overlay={<Tooltip id="pending">Mark as Purchased</Tooltip>}
						>
							<i className="fa fa-check tick-icon" aria-hidden="true"></i>
						</OverlayTrigger>
					)}
				</div>
			</div>
		</div>
	);
};

export default Item;

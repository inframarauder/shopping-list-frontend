import React, { useState } from "react";
import { Nav, Tab, Container } from "react-bootstrap";
import ItemsList from "./ItemsList";

const Body = () => {
	const [key, setKey] = useState("pending");

	return (
		<Container className="h-100">
			<Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
				<Nav fill variant="pills">
					<Nav.Item>
						<Nav.Link eventKey="pending">PENDING</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="purchased">PURCHASED</Nav.Link>
					</Nav.Item>
				</Nav>
				<Tab.Content>
					<Tab.Pane eventKey="pending">
						<ItemsList type="pending" />
					</Tab.Pane>
					<Tab.Pane eventKey="purchased">
						<ItemsList type="purchased" />
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		</Container>
	);
};

export default Body;

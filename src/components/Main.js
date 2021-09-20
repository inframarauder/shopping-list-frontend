import React, { useState } from "react";
import { Nav, Tab, Container } from "react-bootstrap";

const Sonnet = () => {
	return (
		<p>
			Be wise as thou art cruel; do not press My tongue-tied patience with too
			much disdain; Lest sorrow lend me words, and words express The manner of
			my pity-wanting pain. If I might teach thee wit, better it were, Though
			not to love, yet, love to tell me so;-- As testy sick men, when their
			deaths be near, No news but health from their physicians know;-- For, if I
			should despair, I should grow mad, And in my madness might speak ill of
			thee
		</p>
	);
};

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
						<Sonnet />
					</Tab.Pane>
					<Tab.Pane eventKey="purchased">
						<Sonnet />
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		</Container>
	);
};

export default Body;

import React, { useState, useContext } from "react";
import { Nav, Tab, Container, Form, Row, Col, Button } from "react-bootstrap";
import Api from "../utils/api";
import ItemsList from "./ItemsList";
import { Context as ItemsContext } from "../contexts/ItemsContext";

const Body = () => {
	const [key, setKey] = useState("pending");
	const [itemName, setItemName] = useState("");
	const { listItems } = useContext(ItemsContext);

	const addItem = (e) => {
		e.preventDefault();
		Api.createItem({ itemName })
			.then((res) => {
				console.log(res.data.message);
				listItems({ purchased: false });
				setItemName("");
			})
			.catch((err) => {
				console.error(err);
				if (err.response.data.message) {
					alert(err.response.data.message);
				}
			});
	};

	return (
		<Container className="h-100">
			<div className="center-content">
				<Form className="form mt-3" onSubmit={addItem}>
					<Row>
						<Col sm={8}>
							<Form.Group className="form-input">
								<Form.Control
									type="text"
									placeholder="add an item..."
									value={itemName}
									onChange={(e) => setItemName(e.target.value)}
								/>
							</Form.Group>
						</Col>
						<Col sm={4} className="button-container">
							<Button type="submit">Add</Button>
						</Col>
					</Row>
				</Form>
			</div>
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
					<Tab.Pane eventKey="pending" mountOnEnter={true} unmountOnExit={true}>
						<ItemsList />
					</Tab.Pane>
					<Tab.Pane
						eventKey="purchased"
						mountOnEnter={true}
						unmountOnExit={true}
					>
						<ItemsList purchased={true} />
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		</Container>
	);
};

export default Body;

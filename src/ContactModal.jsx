import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function ContactModal(props) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Get In Touch</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
						<Form.Control type="email" placeholder="name@example.com" />
					</FloatingLabel>
					<FloatingLabel controlId="floatingPassword" label="Password">
						<Form.Control type="password" placeholder="Password" />
					</FloatingLabel>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

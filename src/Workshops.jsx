import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import card1 from "../public/card1.jpg";
import card2 from "../public/card2.jpg";
import card3 from "../public/card3.jpg";

export default function Workshops() {
	return (
		<div className="workshops bg-light mt-5 pt-5 p-4" id="bragSheet">
			<Row>
				<Col md={4}>
					<h3 className="workshops-subtitle fs-1 text-secondary">Create perfection with Illusion</h3>
				</Col>

				<Col>
					<h1 className="giantWords text-end">Things we have done *</h1>
				</Col>
			</Row>
			<Row className="d-flex justify-content-between mt-3">
				<Col s={6}>
					<Card style={{ border: "none" }}>
						<Card.Body>
							<Card.Title>$200M in B series funding</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Complete Global Re-Brand</Card.Subtitle>
							<Card.Text className="text-muted">Led a global reabrand for a major talent marketplace.</Card.Text>
							<Button href="https://www.google.com/" variant="light">
								See them Now
							</Button>
						</Card.Body>
						<Card.Img variant="bottom" src={card1} />
					</Card>
				</Col>
				<Col s={6}>
					<Card style={{ border: "none" }}>
						<Card.Img variant="top" src={card2} />
						<Card.Body>
							<Card.Title>Profit Peak Sales</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">20% increase in YOY sales</Card.Subtitle>
							<Card.Text>Illusion successfully led a complete rebrand of Boost Sales, resulting in a 20% increase in sales within the first year</Card.Text>
							<Button href="https://www.google.com/" variant="light">
								See them Now
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col s={6}>
					<Card style={{ border: "none" }}>
						<Card.Img variant="top" src={card3} />
						<Card.Body>
							<Card.Title>Viral Wave Media</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">New users more money</Card.Subtitle>
							<Card.Text>"Illusion successfully rebranded XYZ company, resulting in a 20% increase in user engagement within the first six months."</Card.Text>
							<Button href="https://www.google.com/" variant="light">
								See them Now
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

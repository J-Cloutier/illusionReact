import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

export default function Hero(props) {
	return (
		<Container className="mb-3" id="whatWeDo">
			<Row>
				<Col md={9} lg={8}>
					<h1 className="hero-h1">
						What we do<span className="asterix">*</span>
					</h1>
				</Col>
				<Col>
					<p className="hero-content pt-5">Illusion is a strategic brand and design company that helps its clients reimagine, revitalize and re-engineer their brands to achieve breakthrough results.</p>
				</Col>
			</Row>
			<Row>
				<Container className="">
					<Button className="m-1" href="#" size="lg" variant="outline-secondary" onClick={props.clickHandle}>
						Lets Work Together
					</Button>
					<Button className="m-1" href="#theFormula" size="lg" variant="outline-secondary">
						the Illusion Method
					</Button>
				</Container>
			</Row>
		</Container>
	);
}

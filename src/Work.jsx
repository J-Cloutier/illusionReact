import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import chair from "../public/pramod-tiwari-GDgCAUWN05s-unsplash.jpg";

export default function Work() {
	return (
		<Container className="pt-5" id="theFormula">
			<Row>
				<Col md={1} className="text-secondary">the secret formula</Col>
				<Col md={5} className="d-flex flex-column justify-content-between">
					<p className="pt-5">
						<span className="fw-bold fs-3">Step 1</span>
						<br />
						We begin by conducting thorough research on your current brand, analyzing your target audience, competitors, and market trends to gain a clear understanding of your brand's strengths and weaknesses.
					</p>
					<p className="">
						<span className="fw-bold fs-3">Step 2 </span>
						<br />
						Using the insights gained from our research, we work with you to develop a comprehensive brand strategy that aligns with your business goals and differentiates you from your competitors.
					</p>
					<p className="pb-2">
						<span className="fw-bold fs-3">Step 3 </span>
						<br />
						Once the strategy is in place, we will work with you to implement the new branding across all touchpoints, including design, messaging, and digital platforms. We will also provide training and support to ensure that your team is equipped to effectively communicate and represent the new brand.
					</p>
				</Col>
				<Col md={1}></Col>
				<Col md={5}>
					<img src={chair} className="img-fluid" alt="" />
				</Col>
			</Row>
		</Container>
	);
}

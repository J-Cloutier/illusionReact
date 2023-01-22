import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import speaking from "../public/headway-F2KRf_QfCqw-unsplash.jpg";
import speaking2 from "../public/headway-5QgIuuBxKwM-unsplash.jpg";


export default function Services() {
    return (
		<>
			<h1 className="d-flex flex-md-wrap giantWords services-title pt-5 mt-5" id="services">
				<span className="asterix">*</span>
				<span>s</span>
				<span>e</span>
				<span>r</span>
				<span>v</span>
				<span>i</span>
				<span>c</span>
				<span>e</span>
				<span>s</span>
				<span className="asterix">*</span>
				<span>s</span>
				<span>e</span>
				<span>r</span>
				<span>v</span>
				<span>i</span>
				<span>c</span>
				<span>e</span>
				<span>s</span>
				<span className="asterix">*</span>
				<span>s</span>
				<span>e</span>
				<span>r</span>
				<span>v</span>
				<span>i</span>
				<span>c</span>
				<span>e</span>
				<span>s</span>
				<span className="asterix">*</span>
				<span>s</span>
				<span>e</span>
				<span>r</span>
				<span>v</span>
				<span>i</span>
				<span>c</span>
				<span>e</span>
				<span>s</span>
				<span className="asterix">*</span>
				<span>s</span>
				<span>e</span>
				<span>r</span>
				<span>v</span>
				<span>i</span>
				{/* <span>c</span>
                <span>e</span> */}
				{/* <span>s</span> */}
				{/* <span>*</span> */}
			</h1>

			<Container className="mt-5 pt-5">
				<Row>
					<Col md={5}>
						<h3 className="workshops-subtitle">Speaking engagements</h3>
						<p className="text-muted pt-5">
							Our brand identity experts have extensive experience in speaking engagements, sharing their knowledge and expertise on topics such as brand strategy, branding and design, and the importance of a strong brand identity in today's competitive market.
							<br />
							We have presented at conferences, seminars, and events, and have helped businesses of all sizes to better understand the value of investing in their brand.
							<br />
							<br />
							Whether you're looking to rebrand or simply want to gain a deeper understanding of how to effectively market your business, our team can provide valuable insights and strategies to help you achieve success.
						</p>
					</Col>
					<Col md={1}></Col>
					<Col md={6}>
						<img src={speaking} className="img-fluid" alt="" />
					</Col>
				</Row>
				<Row className="mt-5 pt-5 pb-5">
					<Col md={6}>
						<img src={speaking2} className="img-fluid" alt="" />
					</Col>
					<Col md={2}></Col>
					<Col md={4}>
						<h3 className="workshops-subtitle text-end">Web Seminars</h3>
						<p className="text-muted pt-5 text-end">
							Join our web seminars to learn how to elevate your brand's identity to the next level! Our experienced brand identity experts will share their knowledge and strategies on how to effectively communicate your brand's message, stand out from the competition, and connect with
							your target audience.
							<br />
							<br />
							Don't miss out on this opportunity to take your brand to new heights!
						</p>
					</Col>
				</Row>

				<Row className="mt-5 pt-5">
					<Col md={7}>
						<h1 className="giantWords">Let's * work with you</h1>
					</Col>
					{/* <Col md={1}></Col> */}
					<Col>
						<h3 className="workshops-subtitle display-4 text-secondary text-end">
							Creating Reality through <span className="h1 text-dark">Illusion</span>
						</h3>
					</Col>
				</Row>
			</Container>
		</>
	);
}

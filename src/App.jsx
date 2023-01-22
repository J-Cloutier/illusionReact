import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import Header from "./Header";
import Hero from "./Hero.jsx";
import BigPicture from "./BigPicture";
import Work from "./Work";
import Workshops from "./Workshops";
import Services from "./Services";
import ContactModal from "./ContactModal";
import Foot from "./Foot";

function App() {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<>
			<Header />
			<Hero clickHandle={() => setModalShow(true)} />
			<BigPicture />
			<Work />
			<Workshops />
			<Services />
			{/* <Button variant="primary" onClick={() => setModalShow(true)}>
				Launch vertically centered modal
			</Button> */}

			<ContactModal show={modalShow} onHide={() => setModalShow(false)} />
			<Foot />
		</>
	);
}

export default App;

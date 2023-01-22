import React from "react";
import { Container } from "react-bootstrap";

export default function BigPicture() {
	const [width, setWidth] = React.useState(window.innerWidth);
	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};
	React.useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	return <img src="./shana-van-roosbroek-gfoXb9jCHm4-unsplash.jpg" width={width} alt="" />;
}

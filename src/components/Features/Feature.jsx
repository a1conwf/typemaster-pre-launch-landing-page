import React from "react";
import "./Feature.scss";

const Feature = (props) => {
	return (
		<div className="feature">
			<img src={props.icon} alt="feature-icon" className="feature__icon" />
			<h3 className="feature__title">{props.title}</h3>
			<p className="feature__description">{props.description}</p>
		</div>
	);
};

export default Feature;

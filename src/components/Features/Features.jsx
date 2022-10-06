import React from "react";
import Feature from "./Feature";
import "./Features.scss";

//Icons
import iconCompatible from "../../assets/svg/icon-compatible.svg";
import iconBluetooth from "../../assets/svg/icon-bluetooth.svg";
import iconBattery from "../../assets/svg/icon-battery.svg";
import iconLight from "../../assets/svg/icon-light.svg";

const Features = () => {
	return (
		<section className="features">
			<div className="container">
				<div className="features__inner">
					<Feature icon={iconCompatible} title="Highly compatible" description="Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."></Feature>

					<Feature icon={iconBluetooth} title="Wireless with bluetooth" description="Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."></Feature>

					<Feature icon={iconBattery} title="High capacity battery" description="Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."></Feature>

					<Feature icon={iconLight} title="Rgb backlit modes" description="Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."></Feature>
				</div>
			</div>
		</section>
	);
};

export default Features;

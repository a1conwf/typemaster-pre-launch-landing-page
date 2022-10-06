import React from "react";

//Images
import glsKbdMob from "../../assets/images/mobile/image-glass-and-keyboard.jpg";
import glsKbdTab from "../../assets/images/tablet/image-glass-and-keyboard.jpg";
import glsKbdDesk from "../../assets/images/desktop/image-glass-and-keyboard.jpg";

import phKbdMob from "../../assets/images/mobile/image-phone-and-keyboard.jpg";
import phKbdTab from "../../assets/images/tablet/image-phone-and-keyboard.jpg";
import phKbdDesk from "../../assets/images/desktop/image-phone-and-keyboard.jpg";

import patternSquare from "../../assets/svg/pattern-square.svg";

//Styles
import "../../sass/_base.scss";
import "../../sass/_layout.scss";
import "../About/About.scss";

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="about__content">
					<div className="about__img">
						<img className="pattern" src={patternSquare} alt="pattern-square" />
						<div className="phone-img">
							<img className="img-mob" src={phKbdMob} alt="phone-and-keyboard" />
							<img className="img-tab" src={phKbdTab} alt="phone-and-keyboard" />
							<img className="img-desk" src={phKbdDesk} alt="phone-and-keyboard" />
							<div className="overlay"></div>
						</div>

						<img className="img-mob glass" src={glsKbdMob} alt="glass-and-keyboard" />
						<img className="img-tab glass" src={glsKbdTab} alt="glass-and-keyboard" />
						<img className="img-desk glass" src={glsKbdDesk} alt="glass-and-keyboard" />
					</div>
					<div className="about__info">
						<h2>Mechanical wireless Keyboard</h2>
						<p>The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

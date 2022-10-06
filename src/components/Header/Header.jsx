import React from "react";

//Images
import brandLogo from "../../assets/brand/logo.svg";
import imgKeyboardMob from "../../assets/images/mobile/image-keyboard.jpg";
import imgKeyboardTab from "../../assets/images/tablet/image-keyboard.jpg";
import imgKeyboardDesk from "../../assets/images/desktop/image-keyboard.jpg";
import patternSquare from "../../assets/svg/pattern-square.svg";

//Styles
import "../../sass/_base.scss";
import "../../sass/_components.scss";
import "../../sass/_layout.scss";
import "../Header/Header.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__top">
					<div className="logo">
						<img src={brandLogo} alt="brand-logo" />
					</div>
					<div className="btn gry">Pre-order now</div>
				</div>
				<div className="header__bottom">
					<div className="header__bottom-content">
						<h1>Typemaster keyboard</h1>
						<p>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
						<div className="order">
							<button className="btn org">Pre-order now</button>
							<span>Release on 5/27</span>
						</div>
					</div>
					<div className="header__bottom-img">
						<img className="img-mob" src={imgKeyboardMob} alt="keyboard-img" />
						<img className="img-tab" src={imgKeyboardTab} alt="keyboard-img" />
						<img className="img-desk" src={imgKeyboardDesk} alt="keyboard-img" />
						<img className="pattern" src={patternSquare} alt="square-pattern" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

import React, { useState, useEffect } from 'react';
import './Nav.css';


function Nav() {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);
	return (
		<div className={`nav ${show && "nav__black"}`}>
		  <img 
		    className="nav__logo"
		    alt="Netflix logo"
		    src="https://i.dlpng.com/static/png/6486332_preview.png"
		  />
		  <img 
		    className="nav__avatar"
		    alt="Netflix logo"
		    src="https://library.kissclipart.com/20181001/wbw/kissclipart-gsmnet-ro-clipart-computer-icons-user-avatar-4898c5072537d6e2.png"
		  />
		</div>
	)
}
export default Nav;
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/planeta_logo.webp"
import "/workspaces/base-evento-acciona/src/front/styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<div className="d-flex justify-content-between align-items-center px-3 margin-bottom 20px" style={{ width: '100%' }}>
					<Link to="/">
						<img className="navbar-brand mb-0" src={Logo} alt="Logo" />
					</Link>
					<div className="d-flex align-items-center">
						<Link to="/demo" className="me-2">
							<button className="btn">Example button</button>
						</Link>
						<Link to="/single">
							<button className="btn">Another button</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>

	);
};

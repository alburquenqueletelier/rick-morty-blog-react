import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SearchInput } from "./searchInput";

export const Navbar = () => {

	const {actions} = useContext(Context);
	const [activeLink, setActiveLink] = useState("");

	const showOffcanva = () => {
		const offcanvas = new bootstrap.Offcanvas(document.querySelector('.offcanvas'));
		offcanvas.show();
	}

	const handleClick = (e) => {
		setActiveLink(e.target.id);
		actions.setSearch("");
		document.querySelector('input').value = "";
		const offLinks = document.querySelectorAll('a');
		offLinks.forEach(link => {
			if (link.id == e.target.id && !e.target.className.includes('active')) {
				e.target.classList.add('active');
			} else {
				link.classList.remove('active');
			}
		});
		const offcanvas = bootstrap.Offcanvas.getInstance(document.querySelector('.offcanvas'));
		offcanvas.hide();
	};

	useEffect(() => {
		const location = window.location.href;
		var link;
		if (location.includes('episodes')) {
			link = document.querySelector('#link-episodes');
		} else
			if (location.includes('favs')) {
				link = document.querySelector('#link-favs');
			}
			else {
				link = document.querySelector('#link-characters');
			}
		link.classList.add('active')
	}, [])

	return (
		<>
			<button onMouseEnter={showOffcanva} className="btn btn-primary sticky-top w-100 menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><span className="navbar-toggler-icon"></span></button>
			<div className="offcanvas offcanvas-top" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
				{/* <div className="offcanvas-header">
					<button type="button" className="btn d-flex justify-content-center w-100" data-bs-dismiss="offcanvas" aria-label="Close">
						<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu Principal</h5>

					</button>
				</div> */}
				<div className="offcanvas-body bg-dark">
					<SearchInput />
					<nav className="nav nav-pills flex-column">
						<Link id="link-characters" onClick={handleClick} to="/" className={"flex-sm-fill text-sm-center nav-link"} aria-current="page">Personajes</Link>
						<Link id="link-episodes" onClick={handleClick} to="/episodes" className={"flex-sm-fill text-sm-center nav-link"}>Episodios</Link>
						<Link id="link-favs" onClick={handleClick} to="/favs" className={"flex-sm-fill text-sm-center nav-link"}>Favoritos</Link>
					</nav>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-center">Rick and Morty Blog</h1>
				</div>
			</div>
		</>
	);
};

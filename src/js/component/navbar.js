import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

export const Navbar = () => {

	const [activeLink, setActiveLink] = useState("");

	const showOffcanva = ()=>{
		const offcanvas = new bootstrap.Offcanvas(document.querySelector('.offcanvas'));
		offcanvas.show();
	}

	const handleClick = (e)=> {
		setActiveLink(e.target.id);
		const offLinks = document.querySelectorAll('a');
		offLinks.forEach(link=>{
			if(link.id == e.target.id && !e.target.className.includes('active')){
				e.target.classList.add('active');
			} else {
				link.classList.remove('active');
			}
		});
		const offcanvas = bootstrap.Offcanvas.getInstance(document.querySelector('.offcanvas'));
		offcanvas.hide();
	};

	useEffect(()=>{
		const location = window.location.href;
		var link;
		if (location.includes('episodes')){
			link = document.querySelector('#link-episodes');
		} else 
		if(location.includes('favs')){
			link = document.querySelector('#link-favs');
		}
		else{ 
			link = document.querySelector('#link-characters');
		}
		link.classList.add('active')
	},[])

	return (
		<>
			<button onMouseEnter={showOffcanva} className="btn btn-primary sticky-top w-100 menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><span className="navbar-toggler-icon"></span></button>

			{/* <div className="d-none d-md-block sticky-md-top bg-dark">
				<nav className="nav nav-pills flex-column flex-sm-row">
					<Link to="/" className="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Personajes</Link>
					<Link to="/espisodes" className="flex-sm-fill text-sm-center nav-link" href="#">Episodios</Link>
					<Link to="/favs" className="flex-sm-fill text-sm-center nav-link" href="#">Favoritos</Link>
				</nav>
			</div> */}

			<div className="offcanvas offcanvas-top" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
				<div className="offcanvas-header">
					<button type="button" className="btn d-flex justify-content-center w-100" data-bs-dismiss="offcanvas" aria-label="Close">
					<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu Principal</h5>

					</button>
				</div>
				<div className="offcanvas-body bg-dark">
				<nav className="nav nav-pills flex-column">
					<Link id="link-characters" onClick={handleClick} to="/" className={"flex-sm-fill text-sm-center nav-link"} aria-current="page">Personajes</Link>
					<Link id="link-episodes" onClick={handleClick} to="/espisodes" className={"flex-sm-fill text-sm-center nav-link"}>Episodios</Link>
					<Link id="link-favs" onClick={handleClick} to="/favs" className={"flex-sm-fill text-sm-center nav-link"}>Favoritos</Link>
				</nav>
				</div>
			</div>
			<div className="row">
			<div className="col-md-12">
				<h1 className="text-center">Rick and Morty</h1>
			</div>
			</div>
		</>
	)

	// return (
	// 	<OffCanvas
	//     width={300}
	//     transitionDuration={300}
	//     effect={"push"}
	//     isMenuOpened={isMenuOpened}
	//     position={"left"}
	//   >
	//     <OffCanvasBody
	//     //   className={styles.bodyClass}
	//       style={{ fontSize: "30px" }}
	//     >
	//       <p>
	//         <a href="#" onClick={()=>handleClick()}>
	//           Toggle Menu
	//         </a>{" "}
	//       </p>
	//     </OffCanvasBody>
	//     <OffCanvasMenu style={{zIndex: 9, background: 'grey'}}>
	//     {/* <OffCanvasMenu className={styles.menuClass}> */}
	//       <p>Placeholder content.</p>
	//       <ul>
	//         <li>Link 1</li>
	//         <li>Link 2</li>
	//         <li>Link 3</li>
	//         <li>Link 4</li>
	//         <li>Link 5</li>
	//         <li>
	//           <a href="#" onClick={()=>handleClick()}>
	//             Toggle Menu
	//           </a>
	//         </li>
	//       </ul>
	//     </OffCanvasMenu>
	//   </OffCanvas>
	// );
};

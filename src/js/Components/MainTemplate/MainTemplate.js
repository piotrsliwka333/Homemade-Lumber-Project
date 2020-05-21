import React, {useState} from "react";
import {BrowserRouter, HashRouter, Link, NavLink} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll"


const Logged = ({userName}) => {

	return (
		<>
			<p className='user-box__name'>Welcome piotrsliwka333@gmail.com!</p>
			<Link to='#' className='user-box__stuff'>Give back Stuff</Link>
			<Link to='#' className='user-box__log-out'>Log out</Link>
		</>
	)

}

const LoggedOut = () => {

	return (
		<>
			<Link to='/login' className='user-box__log-in'>Log in</Link>
			<Link to='/registration' className='user-box__create-account'>Create an Account</Link>
		</>
	)

}


export const MainTemplate = (props) => {
	const [logged,setLogged] = useState(true)
	const [userName,setUserName] = useState('')
	const [menuOpen,setMenuOpen] = useState(true)


	const handleOpenMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return(
		<>
			<header className="heder">
				<section className="heder__content container">
					<BrowserRouter>
					<div className="user-box">
						{logged ? <Logged userName={userName}/> : <LoggedOut/> }
					</div>
					<a onClick={handleOpenMenu} className='menu-toggle'>
						<i className="fas fa-bars"/>
					</a>
					<nav className={menuOpen ? 'page-nav' : "page-nav hide"}>
						<ul className="page-nav__list">
							<li className='page-nav__list__element'>
								<LinkScroll className='page-nav__list__element__link active-link' to='#'>Start</LinkScroll>
							</li>
							<li className='page-nav__list__element'>
								<LinkScroll className='page-nav__list__element__link'
								            duration={1000} smooth={true} to='simple-steps'>How it works ?</LinkScroll>
							</li>
							<li className='page-nav__list__element'>
								<LinkScroll className='page-nav__list__element__link'
								           duration={1000} smooth={true} to='about-us'>About us</LinkScroll>
							</li>
							<li className='page-nav__list__element'>
								<LinkScroll className='page-nav__list__element__link' to='#'>Foundations</LinkScroll>
							</li>
							<li className='page-nav__list__element'>
								<LinkScroll className='page-nav__list__element__link' to='#'>Contact</LinkScroll>
							</li>
						</ul>
					</nav>
					</BrowserRouter>
				</section>
			</header>
			<main>
				{props.children}
			</main>
		</>
	)
}
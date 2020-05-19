import React, {useState} from "react";
import {HashRouter, Link, NavLink} from "react-router-dom";


const Logged = ({userName}) => {

	return (
		<>
			<p className='user-box__name'>Welcome krzysztof@gmail.com!</p>
			<Link to='#' className='user-box__stuff'>Give back Stuff</Link>
			<Link to='#' className='user-box__log-out'>Log out</Link>
		</>
	)

}

const LoggedOut = () => {

	return (
		<>
			<Link to='#' className='user-box__log-in'>Log in</Link>
			<Link to='#' className='user-box__create-account'>Create an Account</Link>
		</>
	)

}


export const MainTemplate = () => {
	const [logged,setLogged] = useState(false)
	const [userName,setUserName] = useState('')
	const [menuOpen,setMenuOpen] = useState(true)


	const handleOpenMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return(
		<header className="heder">
			<section className="heder__content container">
				<HashRouter>
				<div className="user-box">
					{logged ? <Logged userName={userName}/> : <LoggedOut/> }
				</div>
				<a onClick={handleOpenMenu} className='menu-toggle'>
					<i className="fas fa-bars"/>
				</a>
				<nav className={menuOpen ? 'page-nav' : "page-nav hide"}>
					<ul className="page-nav__list">
						<li className='page-nav__list__element'>
							<NavLink className='page-nav__list__element__link active-link' to='#'>Start</NavLink>
						</li>
						<li className='page-nav__list__element'>
							<NavLink className='page-nav__list__element__link' to='#'>How it works ?</NavLink>
						</li>
						<li className='page-nav__list__element'>
							<NavLink className='page-nav__list__element__link' to='#'>About us</NavLink>
						</li>
						<li className='page-nav__list__element'>
							<NavLink className='page-nav__list__element__link' to='#'>Foundations</NavLink>
						</li>
						<li className='page-nav__list__element'>
							<NavLink className='page-nav__list__element__link' to='#'>Contact</NavLink>
						</li>
					</ul>
				</nav>
				</HashRouter>
			</section>
		</header>
	)
}
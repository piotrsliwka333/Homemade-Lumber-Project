import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll"
import fire from "../../firebase/firebase";

const Logged = ({userName}) => {

	return (
		<>
			<p className='user-box__name'>Welcome: {userName}</p>
			<Link to='/give-things' className='user-box__stuff'>Give back Stuff</Link>
			<button onClick={logOutFn} className='user-box__log-out'>Log out</button>
		</>
	)
}

const logOutFn = () => {
	fire.auth().signOut().catch(e => console.log(e));
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
	const {logIn} = props
	const [logged,setLogged] = useState(false)
	const [userName,setUserName] = useState('')
	const [menuOpen,setMenuOpen] = useState(false)

	fire.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			setLogged(true)
			setUserName(firebaseUser.email)
		} else {
			setLogged(false)
		}
	})

	useEffect(()=> {
		setLogged(logIn)
	},[logIn])

	const handleOpenMenu = () => {
		setMenuOpen(!menuOpen)
	}
	return(
		<>
			<header className="heder">
				<section className="heder__content container">
						<div className="user-box">
							{logged ? <Logged userName={userName}/> : <LoggedOut/> }
						</div>
						<a onClick={handleOpenMenu} className='menu-toggle'>
							<i className="fas fa-bars"/>
						</a>
						<nav className={menuOpen ? 'page-nav' : "page-nav hide"}>
							<ul className="page-nav__list">
								<li className='page-nav__list__element'>
									<Link onClick={handleOpenMenu} className='page-nav__list__element__link active-link' to='/'>Start</Link>
								</li>
								<li className='page-nav__list__element'>
									<LinkScroll onClick={handleOpenMenu} className='page-nav__list__element__link'
									            duration={1000} smooth={true} to='simple-steps'>How it works ?</LinkScroll>
								</li>
								<li className='page-nav__list__element'>
									<LinkScroll onClick={handleOpenMenu} className='page-nav__list__element__link'
									           duration={1000} smooth={true} to='about-us'>About us</LinkScroll>
								</li>
								<li className='page-nav__list__element'>
									<LinkScroll  onClick={handleOpenMenu} className='page-nav__list__element__link'
									            duration={1000} smooth={true} to='help'>Foundations</LinkScroll>
								</li>
								<li className='page-nav__list__element'>
									<LinkScroll onClick={handleOpenMenu} className='page-nav__list__element__link'
									            duration={1000} smooth={true} to='contact'>Contact</LinkScroll>
								</li>
								<li className='page-nav__list__element'>
									<button onClick={handleOpenMenu} className='close-menu-btn'>
										<i className="fas fa-times"/>
									</button>
								</li>
							</ul>
						</nav>
				</section>
			</header>
			<main>
				{props.children}
			</main>
		</>
	)
}
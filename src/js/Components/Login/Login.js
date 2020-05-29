import React, {useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {BrowserRouter, HashRouter, Link} from "react-router-dom";
import fire from "../../firebase/firebase";
import Decoration from '../../../assets/Decoration.svg'

export const Login = () => {
	const [logged,setLogged] = useState(false)
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [emailError,setEmailError] = useState('')
	const [passwordError,setPasswordError] = useState('')

	function validateEmail(email) {
		let emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailValidation.test(email);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if(emailError === false && passwordError === false) {
			setLogged(true)
			setEmail('');
			setPassword('');
			LogIn();
		}
	}

	const handleCheckEmail = (e) => {
		if(validateEmail(e.target.value)) {
			setEmail(e.target.value)
			setEmailError(false)
		} else {
			setEmail(e.target.value)
			setEmailError(true)
		}
	}

	const handleCheckPassword = (e) => {

		if(password.length < 6) {
			setPassword(e.target.value)
			setPasswordError(true)
		} else {
			setPassword(e.target.value)
			setPasswordError(false)
		}
	}

	const auth = fire.auth()
	const LogIn = () => {
		setLogged(true)
		const promise = auth.signInWithEmailAndPassword(email,password);
		promise.catch(e => console.log(e))
	}


	return(
		<MainTemplate logIn={logged}>
			<section className='login'>
				<h1 className='login__title'>Zaloguj się</h1>
				<img className='login__decoration' alt='Decoration' src={Decoration}/>
				<HashRouter>
					<div className='login-box'>
						<form onSubmit={handleSubmit} className='login-box__form'>
							<label className='login-box__form__label'>Email</label>
							<input value={email} onChange={handleCheckEmail} type='email'
							       className={emailError ? 'login-box__form__input error-border' : 'login-box__form__input'}/>
							{emailError && <p className='error-message'>Podany email jest nieprawidłowy</p>}
							<label className='login-box__form__label'>Password</label>
							<input value={password} onChange={handleCheckPassword} type='password'
							       className={passwordError ? 'login-box__form__input error-border' : 'login-box__form__input'}/>
							{passwordError && <p className='error-message'>Podane hasło jest za krótkie</p>}
							<div className='login-btn-box'>
								<Link className='btn' to='/register'>Załóż konto</Link>
								<button type='submit' className='btn active-btn'>Zaloguj się</button>
							</div>
						</form>
					</div>
				</HashRouter>
			</section>
		</MainTemplate>
	)
}
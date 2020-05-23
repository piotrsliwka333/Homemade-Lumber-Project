import React, {useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {HashRouter, Link} from "react-router-dom";

export const Registration = () => {
	const [logged,setLogged] = useState(false)
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [emailError,setEmailError] = useState('')
	const [passwordError,setPasswordError] = useState('')
	const [work,setWork] = useState(false)

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


	return (
		<MainTemplate>
			<section className='registration'>
				<h1 className='registration__title'>Register Account</h1>
				<img className='registration__decoration' src='../../../assets/Decoration.svg'/>
				<HashRouter>
					<div className='registration-box'>
						<form onSubmit={handleSubmit} className='registration-box__form'>
							<label className='registration-box__form__label'>Email</label>
							<input value={email} onChange={handleCheckEmail} type='email'
							       className={emailError ? 'registration-box__form__input error-border' : 'login-box__form__input'}/>
							{emailError && <p className='error-message'>Podany email jest nieprawidłowy</p>}
							<label className='registration-box__form__label'>Password</label>
							<input value={password} onChange={handleCheckPassword} type='password'
							       className={passwordError ? 'registration-box__form__input error-border' : 'login-box__form__input'}/>
							{passwordError && <p className='error-message'>Podane hasło jest za krótkie</p>}
							<label className='registration-box__form__label'>Repeat Password</label>
							<input value={password} onChange={handleCheckPassword} type='password'
							       className={passwordError ? 'registration-box__form__input error-border' : 'login-box__form__input'}/>
							{passwordError && <p className='error-message'>Podane hasło jest za krótkie</p>}
							<div className='registration-btn-box'>
								<Link className='btn' to='#'>Załóż konto</Link>
								<button type='submit' className='btn active-btn'>Zaloguj się</button>
							</div>
						</form>
					</div>
				</HashRouter>
			</section>
		</MainTemplate>
	)
}
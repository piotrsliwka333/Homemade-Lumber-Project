import React, {useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {BrowserRouter, HashRouter, Link} from "react-router-dom";
import fire from "../../firebase/firebase";
import Decoration from '../../../assets/Decoration.svg'

export const Registration = () => {
	const [logged,setLogged] = useState(false)
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [passwordRepeat,setPasswordRepeat] = useState('')
	const [emailError,setEmailError] = useState('')
	const [passwordError,setPasswordError] = useState('')
	const [passwordRepeatError,setPasswordRepeatError]= useState('')
	const [passwordRepeatError2,setPasswordRepeatError2]= useState('')

	function validateEmail(email) {
		let emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailValidation.test(email);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if(emailError === false && passwordError === false && passwordRepeatError === false && passwordRepeatError2 === false) {
			setLogged(true)
			setEmail('');
			setPassword('');
			setPasswordRepeat('');
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

		if(e.target.value.length < 6) {
			setPassword(e.target.value)
			setPasswordError(true)
		} else {
			setPassword(e.target.value)
			setPasswordError(false)
		}
	}

	const handleCheckPasswordRepeat = (e) => {

		if(e.target.value.length < 6) {
			setPasswordRepeat(e.target.value)
			setPasswordRepeatError(true)
		}
		if(e.target.value.length >= 6) {
			setPasswordRepeat(e.target.value)
			setPasswordRepeatError(false)
		}
		if(e.target.value !== password) {
			setPasswordRepeat(e.target.value)
			setPasswordRepeatError2(true)
		}
		if (e.target.value === password){
			setPasswordRepeat(e.target.value)
			setPasswordRepeatError2(false)
		}
	}

	const auth = fire.auth()
	const LogIn = () => { // this function will change logged on true and this info will be sent by
		setLogged(true) // props to main Template to show user name and option to log out
		const promise = auth.createUserWithEmailAndPassword(email,password);
		promise.catch(e => console.log(e))
	}


	return (
		<MainTemplate logIn={logged}>
			<section className='registration'>
				<h1 className='registration__title'>Register Account</h1>
				<img className='registration__decoration' alt='Decoration' src={Decoration}/>
				<BrowserRouter>
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
							<input value={passwordRepeat} onChange={handleCheckPasswordRepeat} type='password'
							       className={passwordRepeatError ? 'registration-box__form__input error-border' : 'login-box__form__input'}/>
							{passwordRepeatError && <p className='error-message'>Podane hasło musi mieć 6 znaków</p>}
							{passwordRepeatError2 && <p className='error-message'>Hasła muszą być takie same</p>}
							<div className='registration-btn-box'>
								<Link className='btn' to='/login'>Zaloguj się</Link>
								<button type='submit' className='btn active-btn'>Załóż konto</button>
							</div>
						</form>
					</div>
				</BrowserRouter>
			</section>
		</MainTemplate>
	)
}
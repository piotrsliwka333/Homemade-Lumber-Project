import React, {useEffect, useState} from "react";
import Decoration from '../../../assets/Decoration.svg'
import ContactBackground from '../../../assets/Background-Contact-Form.jpg'

export const HomeContact = () => {
	const [name,setName] = useState('')
	const [email,setEmail] = useState('')
	const [message,setMessage] = useState('')
	const [nameError,setNameError] = useState('')
	const [emailError,setEmailError] = useState('')
	const [messageError,setMessageError] = useState('')
	const [formSent,setFormSent] = useState('')

	function validateEmail(email) {
		let emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailValidation.test(email);
	}


	const handleSubmit = (e) => {
		e.preventDefault()

		if(name.indexOf(" ") >= 0 || name.length <= 0) {
			setNameError(true);
		}
		if(name.indexOf(" ") < 0 && name.length > 0) {
			setNameError(false);
		}
		console.log(`NameError${nameError}`)

		if(!validateEmail(email)) {
			setEmailError(true)
		}
		if(validateEmail(email)) {
			setEmailError(false)
		}
		console.log(`EmailError${emailError}`)

		if(message.length < 120) {
			setMessageError(true)
		}
		if(message.length >= 120) {
			setMessageError(false)
		}
		if(messageError === false && nameError === false && emailError === false) {

				const dateToSend = {
					name: name,
					email: email,
					message: message
				}
				console.log(dateToSend);

				fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
					method: 'POST',
					headers: {
						'Content-Type': "application/json"
					},
					body: JSON.stringify(dateToSend)
				})
					.then(response => response.json())
					.then(data => {
						setFormSent(true)
						setName('')
						setEmail('')
						setMessage('')
						console.log(data);
					})
					.catch(error => {
						console.log(error)
					})
		}
	}

	const style = {
		backgroundImage: `url(${ContactBackground})`
	}

	return (
		<section className='contact' id='contact' style={style}>
			<div className='contact-background'>
					<div className='contact-box'>
						<h6 className='contact-box__title'>Skontaktuj się z nami</h6>
						<img className='contact-box__decoration' alt='Decoration' src={Decoration}/>
						{formSent && <p className='form-sent'>Wiadomość została wysłana! <br/> Wkrótce się  skontaktujemy</p>}
						<form onSubmit={handleSubmit} className='contact-box__form'>
							<div className='input__group'>
								<label>Wpisz swoje imię</label>
								<input disabled={formSent} className={nameError ? 'error-border' : undefined} onChange={e => setName(e.target.value)} name='name' type='text' value={name}
								placeholder={'Piotr'}/>
								{nameError && <p className='error-message'>Podane imie jest nieprawidłowe</p>}
							</div>
							<div className='input__group'>
								<label>Wpisz swój email</label>
								<input disabled={formSent} className={emailError ? 'error-border' : undefined} onChange={e => setEmail(e.target.value)} name='email' type='email' value={email}
								placeholder={'abc@xyz.pl'}/>
								{emailError && <p className='error-message'>Podane email jest nieprawidłowy</p>}
							</div>
							<div className='input__group'>
								<label>Wpisz swoją wiadomość</label>
								<textarea disabled={formSent} className={messageError ? 'error-border' : undefined} onChange={e => setMessage(e.target.value)} name='message' value={message}
								placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
								{messageError && <p className='error-message'>Wiadomość musi mieć co najmniej 120 znaków</p>}
							</div>
							<button className='contact-box__form__btn' type='submit'>Wyślij</button>
						</form>
					</div>
				</div>
		</section>
	)
}
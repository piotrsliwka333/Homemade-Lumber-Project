import React, {useState} from "react";

export const HomeContact = () => {
	const [name,setName] = useState('')
	const [email,setEmail] = useState('')
	const [message,setMessage] = useState('')
	return (
		<section className='contact' id='contact'>
			<div className='contact-background'>
					<div className='contact-box'>
						<h6 className='contact-box__title'>Skontaktuj się z nami</h6>
						<img className='contact-box__decoration' src='../../../assets/Decoration.svg'/>
						<form className='contact-box__form'>
							<div className='input__group'>
								<label>Wpisz swoje imię</label>
								<input onChange={e => setName(e.target.value)} name='name' type='text' value={name}
								placeholder={'Piotr'}/>
							</div>
							<div className='input__group'>
								<label>Wpisz swój email</label>
								<input onChange={e => setEmail(e.target.value)} name='email' type='email' value={email}
								placeholder={'abc@xyz.pl'}/>
							</div>
							<div className='input__group'>
								<label>Wpisz swoją wiadomość</label>
								<textarea onChange={e => setMessage(e.target.value)} name='message' value={message}
								placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
							</div>
							<button className='contact-box__form__btn' type='submit'>Wyślij</button>
						</form>

					</div>
				</div>
		</section>
	)
}
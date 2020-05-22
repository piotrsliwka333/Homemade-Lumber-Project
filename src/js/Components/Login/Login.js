import React from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {BrowserRouter, HashRouter, Link} from "react-router-dom";



export const Login = () => {


	return(
		<MainTemplate>
			<section className='login'>
				<h1 className='login__title'>Zaloguj się</h1>
				<img className='login__decoration' src='../../../assets/Decoration.svg'/>
				<HashRouter>
					<div className='login-box'>
						<form className='login-box__form'>
							<label className='login-box__form__label'>Email</label>
							<input type='email' className='login-box__form__input'/>
							<label className='login-box__form__label'>Password</label>
							<input type='password' className='login-box__form__input'/>
						</form>
					</div>
					<div className='login-btn-box'>
						<Link className='btn' to='#'>Załóż konto</Link>
						<Link className='btn active-btn' to='#'>Zaloguj się</Link>
					</div>
				</HashRouter>
			</section>
		</MainTemplate>
	)
}
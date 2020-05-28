import React from "react";
import {HashRouter,Link} from "react-router-dom";

import {MainTemplate} from "../MainTemplate/MainTemplate";
import Decoration from '../../../assets/Decoration.svg'
export const LogOut = () => {


	return (
		<MainTemplate>
			<section className='log-out'>
				<HashRouter>
					<h1 className='log-out__title'>Wylogowanie nastąpiło<br/> pomyślnie</h1>
					<img className='log-out__decoration' alt='Decoration' src={Decoration}/>
					<Link to={'/'} className='log-out__btn'>Strona główna</Link>
				</HashRouter>
			</section>
		</MainTemplate>
	)
}
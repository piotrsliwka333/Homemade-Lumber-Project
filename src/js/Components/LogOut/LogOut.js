import React from "react";
import {HashRouter,Link} from "react-router-dom";

import {MainTemplate} from "../MainTemplate/MainTemplate";

export const LogOut = () => {


	return (
		<MainTemplate>
			<section className='log-out'>
				<HashRouter>
					<h1 className='log-out__title'>Wylogowanie nastąpiło<br/> pomyślnie</h1>
					<img className='log-out__decoration' src='../../../assets/Decoration.svg'/>
					<Link to={'/'} className='log-out__btn'>Strona główna</Link>
				</HashRouter>
			</section>
		</MainTemplate>
	)
}
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Decoration from '../../../assets/Decoration.svg'
import HomeHero from '../../../assets/Home-Hero-Image.jpg'

export const HomeJumbotron = () => {
	const [userLogged,setUserLogged] = useState(false)

	const style = {
		backgroundImage: `url(${HomeHero})`
	}

	return (
		<section className='jumbotron' style={style}>
			<div className='container'>
				<div className='row'>
					<div className='col-11 col-md-8 col-xl-8 box'>
						<h1 className='jumbotron__title'>Start Help !</h1>
						<h2 className='jumbotron__subtitle'>Give unwanted things into trusted hands</h2>
						<img className='jumbotron__decoration' alt='Decoration' src={Decoration}/>
						<div className='buttons'>
							<Link className='btn' to={userLogged ? '/' : '/login'}>Give <br/> Things</Link>
							<Link className='btn' to='/'>organize <br/>collection</Link>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
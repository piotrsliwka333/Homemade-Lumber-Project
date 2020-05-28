import React from "react";
import {BrowserRouter, HashRouter, Link} from "react-router-dom";
import Decoration from '../../../assets/Decoration.svg'
import Icon1 from '../../../assets/Icon-1.svg'
import Icon2 from '../../../assets/Icon-2.svg'
import Icon3 from '../../../assets/Icon-3.svg'
import Icon4 from '../../../assets/Icon-4.svg'

export const HomeSimpleSteps = () => {


	return (
		<section className='simple-steps' id='simple-steps'>
			<h4 className='simple-steps__title'>4 Simple Steps Are Enough</h4>
			<img className='simple-steps__decoration' alt='Decoration' src={Decoration}/>
			<article className='simple-steps__instructions'>
				<div className='container'>
					<div className='row'>
						<div className='col-5 col-md-5 col-xl-2 instruction-box'>
							<img className='instruction-box__icon' alt='t-shirt icon' src={Icon1}/>
							<p className='instruction-box__action'>Choose Things</p>
							<p className='instruction-box__text'>clothes,toys,equipment and other</p>
						</div>
						<div className='col-5 col-md-5 col-xl-2 instruction-box'>
							<img className='instruction-box__icon' alt='shop-bag icon' src={Icon2}/>
							<p className='instruction-box__action'>Pack them up</p>
							<p className='instruction-box__text'>use the garbage bags</p>
						</div>
						<div className='col-5 col-md-5 col-xl-2 instruction-box'>
							<img className='instruction-box__icon' alt='magnifier icon' src={Icon3}/>
							<p className='instruction-box__action'>Decide who you want help</p>
							<p className='instruction-box__text'>choose a trusted place</p>
						</div>
						<div className='col-5 col-md-5 col-xl-2 instruction-box'>
							<img className='instruction-box__icon' alt='return icon' src={Icon4}/>
							<p className='instruction-box__action'>order a courier</p>
							<p className='instruction-box__text'>the courier will arrive at convenient time</p>
						</div>
					</div>
				</div>
			</article>
			<HashRouter>
				<Link className='btn' to={'/login'}>Give <br/>Things</Link>
			</HashRouter>
		</section>

	)
}
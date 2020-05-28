import React from "react";
import Decoration from '../../../assets/Decoration.svg'
import Signature from '../../../assets/Signature.svg'

export const HomeAboutUs = () => {


	return (
		<section className='about-us' id='about-us'>
			<div className='about-us__content'>
				<h5 className='about-us__content__title'>About us</h5>
				<img alt='decoration' src={Decoration}  className='about-us__content__decoration'/>
				<p className='about-us__content__text'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed
					pea prairie turnip leek lentil turnip greens parsnip.
				</p>
				<img className='about-us__content__signature' alt='signature' src={Signature}/>
			</div>
			<div className='about-us__image'>

			</div>

		</section>
	)
}
import React from "react";

export const HomeHelpInformation = (props) => {
	const {name,description,target} = props


	return(
		<div className='col-10 col-md-10 col-xl-12 help__content'>
			<div className='help__content__group'>
				<p className='help__content__group__name'>{name}</p>
				<p className='help__content__group__description'>
					{description}
				</p>
			</div>
			<p className='help__content__target'>
				{target}
			</p>
		</div>
	)
}
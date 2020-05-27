import React from "react";

export const GiveThingsFormButton = (props) => {
	const {name,actionClick,argument,argumentTwo,argumentThree,argumentFour} = props
	return (
		<button onClick={e => actionClick(e,argument,argumentTwo,argumentThree,argumentFour)} className='things-form__button'>{name}</button>
	)
}

export const GiveThingsFormButtons = (props) => {

	return(
		<div className='things-form__buttons'>
			{props.children}
		</div>

	)
}
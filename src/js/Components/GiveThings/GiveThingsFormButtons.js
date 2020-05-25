import React from "react";

export const GiveThingsFormButton = (props) => {
	const {name,actionClick} = props
	return (
		<button onClick={e => actionClick(e)} className='things-form__button'>{name}</button>
	)
}

export const GiveThingsFormButtons = (props) => {

	return(
		<div className='things-form__buttons'>
			{props.children}
		</div>

	)
}
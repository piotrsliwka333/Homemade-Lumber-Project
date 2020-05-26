import React, {useState} from "react";


const FormElement = (props) => {
	const {name,type,text,onPickUpDetails,pickUpDetails} = props

	return (
		<div className='element-box'>
			<label className='form-four__label'>{text}</label>
			<input name={name} type={type} value={pickUpDetails[name]} onChange={e => onPickUpDetails(e)} className='form-four__input'/>
		</div>
	)
}

export const GiveThingsFormFour = (props) => {
	const {onPickUpDetails,pickUpDetails} = props


	return (
		<div className='form-four'>
			<p className='form-step'>Step 4/4</p>
			<h3 className='form-title'>Enter the address and date of receipt of the item:</h3>
			<form className='form-four__form'>
				<div className='box'>
					<p className='information'>Pickup Adress</p>
					<FormElement name='street' pickUpDetails={pickUpDetails} onPickUpDetails={onPickUpDetails} type='text' text='Street' />
					<FormElement name='city' pickUpDetails={pickUpDetails} onPickUpDetails={onPickUpDetails} type='text' text='City' />
					<FormElement name='postCode' pickUpDetails={pickUpDetails} onPickUpDetails={onPickUpDetails} type='number' text='Post Code' />
					<FormElement name='phoneNumber' pickUpDetails={pickUpDetails} onPickUpDetails={onPickUpDetails} type='number' text='Phone NumberS' />
				</div>
				<div className='box'>
					<p className='information'>Pickup date</p>
					<FormElement name='date' pickUpDetails={pickUpDetails} onPickUpDetails={onPickUpDetails}  type='date' text='Date'/>
					<FormElement name='hour' pickUpDetails={pickUpDetails} onPickUpDetails={onPickUpDetails} type='hour' text='Hour'/>
					<div className='element-box textarea-box'>
						<label className='form-four__label'>Courier Message</label>
						<textarea value={pickUpDetails.courierMessage} name='courierMessage' onChange={e => onPickUpDetails(e)} className='form-four__input textarea' />
					</div>
				</div>

			</form>

		</div>
	)
}
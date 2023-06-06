import React, {useEffect, useState} from "react";


const FormElement = (props) => {
	const {name, type, text, onPickUpDetails, pickUpDetails, pickUpDetailsErrors} = props
	const [error, setError] = useState(pickUpDetailsErrors[name])

	useEffect(() => {
		setError(pickUpDetailsErrors[name])
	}, [pickUpDetailsErrors[name]])

	return (
		<div className='element-box'>
			<label className={error ? 'form-four__label error' : 'form-four__label'}>{text}</label>
			<input name={name} type={type} value={pickUpDetails[name]} onChange={e => onPickUpDetails(e)}
			       className='form-four__input'/>
		</div>
	)
}

export const GiveThingsFormFour = (props) => {
	const {onPickUpDetails, pickUpDetails,onTimeValidation, onStreetValidation, onCityValidation, pickUpDetailsErrors,onDateValidation,  onPostCodeValidation, onNumberValidation} = props


	return (
		<div className='form-four'>
			<p className='form-step'>Step 4/4</p>
			<h3 className='form-title'>Enter the address and date of receipt of the item:</h3>
			<form className='form-four__form'>
				<div className='box'>
					<p className='information'>Pickup Adress</p>
					<FormElement name='street' pickUpDetailsErrors={pickUpDetailsErrors} pickUpDetails={pickUpDetails}
					             onPickUpDetails={onStreetValidation} type='text' text='Street'/>
					<FormElement name='city' pickUpDetailsErrors={pickUpDetailsErrors} pickUpDetails={pickUpDetails}
					             onPickUpDetails={onCityValidation} type='text' text='City'/>
					<FormElement name='postCode' pickUpDetailsErrors={pickUpDetailsErrors} pickUpDetails={pickUpDetails}
					             onPickUpDetails={onPostCodeValidation} type='text' text='Post Code'/>
					<FormElement name='phoneNumber' pickUpDetailsErrors={pickUpDetailsErrors} pickUpDetails={pickUpDetails}
					             onPickUpDetails={onNumberValidation} type='tel' text='Phone NumberS'/>
				</div>
				<div className='box'>
					<p className='information'>Pickup date</p>
					<FormElement name='date' pickUpDetailsErrors={pickUpDetailsErrors} pickUpDetails={pickUpDetails}
					             onPickUpDetails={onDateValidation} type='date' text='Date'/>
					<FormElement name='hour' pickUpDetailsErrors={pickUpDetailsErrors} pickUpDetails={pickUpDetails}
					             onPickUpDetails={onTimeValidation} type='time' text='Hour'/>
					<div className='element-box textarea-box'>
						<label className={pickUpDetailsErrors['courierMessage'] ? 'form-four__label error' : 'form-four__label'}>Courier
							Message</label>
						<textarea value={pickUpDetails.courierMessage} name='courierMessage' onChange={e => onPickUpDetails(e)}
						          className='form-four__input textarea'/>
					</div>
				</div>

			</form>

		</div>
	)
}
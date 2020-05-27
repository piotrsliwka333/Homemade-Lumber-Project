import React, {useEffect, useState} from "react";

const PickUpDetailsElement = (props) => {
	const {name,value} = props

	return (
		<div className='element-box'>
			<span className='element'>{name}</span>
			<span className='element-value'>{value}</span>
		</div>
	)
}


export const GiveThingsFormSummary = (props) => {
	const [target,setTarget] = useState(props.target)
	const [location,setLocation] = useState(props.location)
	const [pickUpDetails,setPickUpDetails] = useState(props.pickUpDetails)

	return (
		<div className='summary'>
			<h3 className='summary__title'>Summary of Your donation</h3>
			<div className='container'>
				<div className='row'>
					<div className='box col-10 col-md-10 col-xl-12'>
						<p className='action__title'>You give:</p>
						<div className='target__box'>
							<img className='target__box-icon' src='../../../assets/Icon-1.svg'/>
							{target.children && <span>Children,</span>}
							{target.singleMothers && <span>Single Mothers,</span>}
							{target.homeless && <span>Homeless,</span>}
							{target.disabled && <span>Disabled,</span>}
							{target.elderPeople && <span>Elder People,</span>}
						</div>
						<div className='target__box'>
							<img className='target__box-icon' src='../../../assets/Icon-4.svg'/>
							<span className='location'>for location:{location}</span>
						</div>
					</div>
					<div className='box-details col-10 col-md-10 col-xl-5'>
						<p className='box-details__description'>Pickup Adress:</p>
						<PickUpDetailsElement name='Street' value={pickUpDetails.street}  />
						<PickUpDetailsElement name='City' value={pickUpDetails.city}  />
						<PickUpDetailsElement name='Post Code' value={pickUpDetails.postCode}  />
						<PickUpDetailsElement name='Phone Number' value={pickUpDetails.phoneNumber}  />
					</div>
					<div className='box-details col-10 col-md-10 col-xl-5'>
						<p className='box-details__description'>Pickup date:</p>
						<PickUpDetailsElement name='Date' value={pickUpDetails.date}  />
						<PickUpDetailsElement name='Hour' value={pickUpDetails.hour}  />
						<PickUpDetailsElement name='Courier Message' value={pickUpDetails.courierMessage} />
					</div>

				</div>

			</div>

		</div>
	)
}
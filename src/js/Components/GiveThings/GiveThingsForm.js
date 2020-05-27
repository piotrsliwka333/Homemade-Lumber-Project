import React, {useState} from "react"
import {GiveThingsFormButton, GiveThingsFormButtons} from "./GiveThingsFormButtons";
import {GiveThingsFormInformation} from "./GiveThingsFormInformations";
import {GiveThingsFormOne} from "./GiveThingsFormOne";
import {GiveThingsFormTwo} from "./GiveThingsFormTwo";
import {GiveThingsFormThree} from "./GiveThingsFormThree";
import {GiveThingsFormFour} from "./GiveThingsFormFour";
import {GiveThings} from "./GiveThings";
import {GiveThingsFormSummary} from "./GiveThingsFormSummary";
import {GiveThingsFormSent} from "./GiveThingsFormSent";
import fire from "../../firebase/firebase";

export const GiveThingsForm = () => {
	const [step, setStep] = useState(1)
	const [typeOfThings, setTypeOfThings] = useState('goodClothes')
	const [bagsAmount, setBagsAmount] = useState('Choose')
	const [bagsAmountError, setBagsAmountError] = useState(false);
	const [city, setCity] = useState('Choose')
	const [cityError, setCityError] = useState(false)
	const [groupPeople, setGroupPeople] = useState({
		children: false,
		singleMothers: false,
		homeless: false,
		disabled: false,
		elderPeople: false
	})
	const [groupPeopleError, setGroupPeopleError] = useState(false)
	const [specificOrganization, setSpecificOrganization] = useState('')

	const [pickUpDetails, setPickUpDetails] = useState({
		street: '',
		city: '',
		postCode: '',
		phoneNumber: '',
		date: '',
		hour: '',
		courierMessage: ''
	})

	const [pickUpDetailsErrors, setPickUpDetailsErrors] = useState({
		street: false,
		city: false,
		postCode: false,
		phoneNumber: false,
		date: false,
		hour: false,
		courierMessage: false
	})


	const handleNextStep = (e) => {
		e.preventDefault();
		setStep(prevState => prevState + 1)
	}

	const handlePrevStep = (e) => {
		e.preventDefault();
		setStep(prevState => prevState - 1)
	}

	const handleNextStepBagsValidation = (e, bagsAmount) => {
		e.preventDefault();
		if (bagsAmount === 'Choose') {
			setBagsAmountError(true)
			console.log(bagsAmount === 'Choose')
		} else {
			setStep(prevState => prevState + 1)
			setBagsAmountError(false)
		}
	}

	const handleSetBagsError = () => {
		setBagsAmountError(false)
	}

	//set Location Error

	const handleNextStepCityValidation = (e, city, whoHelp, groupPeopleError, cityError) => {
		e.preventDefault();
		if (whoHelp.children === false && whoHelp.singleMothers === false && whoHelp.homeless === false
			&& whoHelp.disabled === false && whoHelp.elderPeople === false) {
			setGroupPeopleError(true)

		}
		if (city === 'Choose') {
			setCityError(true)
			console.log(city === 'Choose')
		} else if ((whoHelp.children === true || whoHelp.singleMothers === true || whoHelp.homeless === true || whoHelp.disabled === true || whoHelp.elderPeople === true) && cityError === false) {
			setStep(prevState => prevState + 1)
			setCityError(false)
			setGroupPeopleError(false)
		}
	}

	const handleSetCityError = () => {
		setCityError(false)
	}

	const handleSetGroupPeopleError = () => {
		setGroupPeopleError(false)
	}


	// PickUpDetails Validation

	const handleNextStepPickUpDetailsValidation = (e, pickUpDetailsErrors, pickUpDetails) => {
		e.preventDefault();
		if (pickUpDetailsErrors.street === true || pickUpDetails.street.length === 0) {
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					street: true
				}
			})
		}
		if (pickUpDetailsErrors.city === true || pickUpDetails.city.length === 0) {
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					city: true
				}
			})
		}
		if (pickUpDetailsErrors.postCode === true || pickUpDetails.postCode.length === 0) {
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					postCode: true
				}
			})
		}
		if (pickUpDetailsErrors.phoneNumber === true || pickUpDetails.phoneNumber.length === 0) {
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					phoneNumber: true
				}
			})
		}
		if (pickUpDetailsErrors.date === true || pickUpDetails.date.length === 0) {
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					date: true
				}
			})
		}
		if (pickUpDetailsErrors.hour === true || pickUpDetails.hour.length === 0) {
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					hour: true
				}
			})
		} else if (pickUpDetailsErrors.street === false && pickUpDetailsErrors.city === false && pickUpDetailsErrors.postCode === false && pickUpDetailsErrors.postCode === false
			&& pickUpDetailsErrors.phoneNumber === false && pickUpDetailsErrors.date === false && pickUpDetailsErrors.hour === false) {
			setStep(prevState => prevState + 1)
		}

	}

	const handleStreetValidation = (e) => {
		const {name, value} = e.target
		if (value.length <= 2) {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: true
				}
			})
		} else {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: false
				}
			})
		}
	}

	const handleCityValidation = (e) => {
		const {name, value} = e.target
		if (value.length <= 3) {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: true
				}
			})
		} else {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: false
				}
			})
		}
	}

	const handlePostCodeValidation = (e) => {
		const {name, value} = e.target

		function validPostcode(postcode) {
			postcode = postcode.replace(/\s/g, "");
			let regex = /\d{2}-\d{3}/g;
			return regex.test(postcode);
		}

		console.log(validPostcode(value))

		if (!validPostcode(value)) {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: true
				}
			})
		} else {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: false
				}
			})
		}
	}

	const handleNumberValidation = (e) => {
		const {name, value} = e.target

		function validNumber(postcode) {
			postcode = postcode.replace(/\s/g, "");
			let regex = /\d{3}-?\d{3}-?\d{3}/g;
			return regex.test(postcode);
		}

		console.log(validNumber(value))

		if (!validNumber(value)) {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: true
				}
			})
		} else {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: false
				}
			})
		}
	}

	const handleDateValidation = (e) => {
		const {name, value} = e.target


		if (value.length < 10) {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: true
				}
			})
		} else {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: false
				}
			})
		}
	}

	const handleTimeValidation = (e) => {
		const {name, value} = e.target

		function validTime(postcode) {
			postcode = postcode.replace(/\s/g, "");
			let regex = /\d{2}:?\d{2}/g;
			return regex.test(postcode);
		}

		console.log(validTime(value))

		if (!validTime(value)) {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: true
				}
			})
		} else {
			setPickUpDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setPickUpDetailsErrors(prevState => {
				return {
					...prevState,
					[name]: false
				}
			})
		}
	}


	/////////////////////////////////////////
	const handleChangeType = (e) => {
		setTypeOfThings(e.target.value)
	}

	//set bagsAmount Props

	const handleChangeBagsAmount = (e) => {
		setBagsAmount(e.target.value)
	}

	//set City

	const handleChooseCity = (e) => {
		setCity(e.target.value)
	}

	//set group people

	const handleGroupPeople = (e, people) => {
		handleSetGroupPeopleError()
		const {name} = e.target
		setGroupPeople(prevState => {
			return {
				...prevState,
				[name]: !(people[name])
			}
		})
	}

	//set specific organization

	const handleSpecificOrganization = (e) => {
		setSpecificOrganization(e.target.value)
	}

	//set PickUp Details

	const handlePickUpDetails = (e) => {
		const {name, value} = e.target
		setPickUpDetails(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}

	// sent data to firebase


	//Reference messages collection

	let messagesRef = fire.database().ref('message')

	//save message to firebase

	const saveMessage = (e, typeOfThings, bagsAmount, city, groupPeople, pickUpDetails) => {
		setStep(prevState => prevState + 1)
		let newMessageRef = messagesRef.push();
		newMessageRef.set({
			typeOfThings: typeOfThings,
			bagsAmount: bagsAmount,
			city: city,
			groupPeople: groupPeople,
			pickUpDetails: pickUpDetails
		}).catch(e => console.log(e));
	}


	return (
		<section className='things-form'>
			{step < 5 && <GiveThingsFormInformation step={step}/>}
			<div className='things-form__wraper'>
				{step === 1 && <GiveThingsFormOne currentType={typeOfThings} onType={handleChangeType}/>}
				{step === 2 && <GiveThingsFormTwo setBagsAmountError={handleSetBagsError} bagsAmountError={bagsAmountError}
				                                  onBagsAmount={bagsAmount} onBagsAmountFn={handleChangeBagsAmount}/>}
				{step === 3 &&
				<GiveThingsFormThree groupPeopleError={groupPeopleError} setCityError={handleSetCityError} cityError={cityError}
				                     organization={specificOrganization}
				                     onOrganization={handleSpecificOrganization} groupPeople={groupPeople}
				                     onGroupPeople={handleGroupPeople} onCity={city} onChooseCity={handleChooseCity}/>}
				{step === 4 &&
				<GiveThingsFormFour onTimeValidation={handleTimeValidation} onDateValidation={handleDateValidation}
				                    onNumberValidation={handleNumberValidation} onPostCodeValidation={handlePostCodeValidation}
				                    onCityValidation={handleCityValidation} onStreetValidation={handleStreetValidation}
				                    pickUpDetailsErrors={pickUpDetailsErrors} pickUpDetails={pickUpDetails}
				                    onPickUpDetails={handlePickUpDetails}/>}
				{step === 5 && <GiveThingsFormSummary pickUpDetails={pickUpDetails} location={city} target={groupPeople}/>}
				{step === 6 && <GiveThingsFormSent/>}
				<GiveThingsFormButtons>
					{step === 1 && <GiveThingsFormButton actionClick={handleNextStep} name='Next'/>}
					{step === 2 && <>
						<GiveThingsFormButton argument={bagsAmount} actionClick={handleNextStepBagsValidation} name='Next'/>
						<GiveThingsFormButton actionClick={handlePrevStep} name='Back'/>
					</>}
					{(step === 3) && <>
						<GiveThingsFormButton argumentFour={groupPeopleError} argumentThree={cityError} argumentTwo={groupPeople}
						                      argument={city} actionClick={handleNextStepCityValidation}
						                      name='Next'/>
						<GiveThingsFormButton actionClick={handlePrevStep} name='Back'/>
					</>}
					{(step === 4) && <>
						<GiveThingsFormButton argumentTwo={pickUpDetails} argument={pickUpDetailsErrors}
						                      actionClick={handleNextStepPickUpDetailsValidation} name='Next'/>
						<GiveThingsFormButton actionClick={handlePrevStep} name='Back'/>
					</>}
					{step === 5 && <>
						<GiveThingsFormButton actionClick={handlePrevStep} name='Back'/>
						<GiveThingsFormButton argument={typeOfThings} argumentTwo={bagsAmount} argumentThree={city}
						                      argumentFour={groupPeople} argumentFive={pickUpDetails} actionClick={saveMessage} name='Confirm'/>
					</>}
				</GiveThingsFormButtons>
			</div>
		</section>
	)
}
import React, {useState} from "react"
import {GiveThingsFormButton, GiveThingsFormButtons} from "./GiveThingsFormButtons";
import {GiveThingsFormInformation} from "./GiveThingsFormInformations";
import {GiveThingsFormOne} from "./GiveThingsFormOne";
import {GiveThingsFormTwo} from "./GiveThingsFormTwo";
import {GiveThingsFormThree} from "./GiveThingsFormThree";

export const GiveThingsForm = () => {
	const [step,setStep] = useState(3)
	const [typeOfThings,setTypeOfThings] = useState('goodClothes')
	const [bagsAmount,setBagsAmount] = useState('Choose')
	const [city,setCity] = useState('Choose')
	const [groupPeople, setGroupPeople] = useState({
		children: false,
		singleMothers: false,
		homeless: false,
		disabled: false,
		elderPeople: false
	})
	const [specificOrganization,setSpecificOrganization] = useState('')

	const handleNextStep = (e) => {
		e.preventDefault();
		setStep(prevState => prevState + 1)
	}

	const handlePrevStep = (e) => {
		e.preventDefault();
		setStep(prevState => prevState - 1)
	}


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

	const handleGroupPeople = (e,people) => {
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
	return(
		<section className='things-form'>
			<GiveThingsFormInformation step={step}/>
			<div className='things-form__wraper'>
				{step === 1 && <GiveThingsFormOne currentType={typeOfThings} onType={handleChangeType}/>}
				{step === 2 && <GiveThingsFormTwo onBagsAmount={bagsAmount}  onBagsAmountFn={handleChangeBagsAmount} />}
				{step === 3 && <GiveThingsFormThree organization={specificOrganization} onOrganization={handleSpecificOrganization} groupPeople={groupPeople} onGroupPeople={handleGroupPeople} onCity={city} onChooseCity={handleChooseCity} />}
				<GiveThingsFormButtons>
					{step === 1 && <GiveThingsFormButton actionClick={handleNextStep} name='Next'/>}
					{(step === 2 || step === 3) && <>
						<GiveThingsFormButton actionClick={handleNextStep} name='Next'/>
						<GiveThingsFormButton actionClick={handlePrevStep} name='Back'/>
					</>}
					{step === 4 && <>
						<GiveThingsFormButton actionClick={handlePrevStep} name='Back'/>
						<GiveThingsFormButton name='Confirm'/>
					</>}
				</GiveThingsFormButtons>
			</div>
		</section>
	)
}
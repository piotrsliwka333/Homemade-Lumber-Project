import React, {useState} from "react"
import {GiveThingsFormButton, GiveThingsFormButtons} from "./GiveThingsFormButtons";
import {GiveThingsFormInformation} from "./GiveThingsFormInformations";
import {GiveThingsFormOne} from "./GiveThingsFormOne";

export const GiveThingsForm = () => {
	const [step,setStep] = useState(1)
	const [typeOfThings,setTypeOfThings] = useState('goodClothes')
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

	return(
		<section className='things-form'>
			<GiveThingsFormInformation/>
			<div className='things-form__wraper'>
				<GiveThingsFormOne onType={handleChangeType}/>
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
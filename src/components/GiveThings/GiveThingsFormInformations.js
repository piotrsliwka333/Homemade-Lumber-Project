import React, {useEffect, useState} from "react";

export const GiveThingsFormInformation = (props) => {
	const {step} = props
	const [currentInfo,setCurrentInfo] = useState(step)

	useEffect(()=> {
		setCurrentInfo(step)
	},[step])

	return(
		<div className='things-form__information'>
			<h2 className='things-form__information__title'>Important !</h2>
			{currentInfo === 1 &&
			<p className='things-form__information__description'>
				Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
			</p>}
			{currentInfo === 2 &&
			<p className='things-form__information__description'>
				Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.
			</p>}
			{currentInfo === 3 &&
			<p className='things-form__information__description'>
				Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.
			</p>}
			{currentInfo === 4 &&
			<p className='things-form__information__description'>
				Podaj adres oraz termin odbioru rzeczy.
			</p>}
		</div>
	)

}
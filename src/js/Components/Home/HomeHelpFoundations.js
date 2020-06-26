import React, {useState} from "react";
import {HomeHelpInformations} from "./HomeHelpInformations";
import {HomeHelpInformation} from "./HomeHelpInformation";


export const HomeHelpFoundations = () => {
	const [page,setPage] = useState(1)

	const handleChanePage = (e) => {
		const {value} = e.target
		setPage(value)
	}


	return (
		<HomeHelpInformations
			information={'In our database you will find a list of verified foundations with which we cooperate. You can check what they do, who they help and what they need'}>
			{page === 1 && <>
				<HomeHelpInformation name={'Foundation “Dbam o Zdrowie”'}
				                     description={'Objective and mission: Helping people in a difficult life situation.'}
				                     target={'clothes, food, household appliances, furniture, toys'}
				/>
				<HomeHelpInformation name={'Foundation “Dla dzieci”'}
				                     description={'Objective and mission: Helping children from poor families.'}
				                     target={'clothes, furniture, toys'}
				/>
				<HomeHelpInformation name={'Foundation “Bez domu”'}
				                     description={'Objective and mission: Help for people without a place of residence.'}
				                     target={'clothes, food, warm blankets'}
				/>
			</>}
			{page === 2 && <>
				<HomeHelpInformation name={'Fundacja “Lorem ipsum 1”'}
				                     description={'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.'}
				                     target={'ubrania, jedzenie, sprzęt AGD, meble, zabawki'}
				/>
				<HomeHelpInformation name={'Fundacja “Lorem ipsum 2”'}
				                     description={'Cel i misja: Pomoc dzieciom z ubogich rodzin.'}
				                     target={'ubrania, meble, zabawki'}
				/>
				<HomeHelpInformation name={'Fundacja “Lorem ipsum 3”'}
				                     description={'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.'}
				                     target={'ubrania, jedzenie, ciepłe koce'}
				/>

			</>}
			{page === 3 && <>
				<HomeHelpInformation name={'Fundacja “Lorem ipsum 4”'}
				                     description={'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.'}
				                     target={'ubrania, jedzenie, sprzęt AGD, meble, zabawki'}
				/>
				<HomeHelpInformation name={'Fundacja “Lorem ipsum 5”'}
				                     description={'Cel i misja: Pomoc dzieciom z ubogich rodzin.'}
				                     target={'ubrania, meble, zabawki'}
				/>
				<HomeHelpInformation name={'Fundacja “Lorem ipsum 6”'}
				                     description={'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.'}
				                     target={'ubrania, jedzenie, ciepłe koce'}
				/>
			</>}
			<ul className='help__page-changers'>
				<li value={1} onClick={handleChanePage} className={page === 1 ? 'help__page-changer active-changer': 'help__page-changer'}>1</li>
				<li value={2} onClick={handleChanePage} className={page === 2 ? 'help__page-changer active-changer': 'help__page-changer'}>2</li>
				<li value={3} onClick={handleChanePage} className={page === 3 ? 'help__page-changer active-changer': 'help__page-changer'}>3</li>
			</ul>
		</HomeHelpInformations>
	)

}
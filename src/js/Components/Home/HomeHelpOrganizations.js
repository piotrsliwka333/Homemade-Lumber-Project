import React, {useState} from "react";
import {HomeHelpInformations} from "./HomeHelpInformations";
import {HomeHelpInformation} from "./HomeHelpInformation";


export const HomeHelpOrganizations = () => {
	const [page,setPage] = useState(1)

	const handleChanePage = (e) => {
		const {value} = e.target
		setPage(value)
	}

	return (
		<HomeHelpInformations
			information={'Lorem issamo lemiro aspeto  kimino remi mi laso dala qui ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'}>
			{page === 1 && <>
				<HomeHelpInformation name={'Organization “Lorem Ipsum 1”'}
				                     description={'Quis varius quam quisque id diam vel quam elementum pulvinar.'}
				                     target={'Quis varius quam quisque id diam vel quam elementum pulvinar.'}
				/>
				<HomeHelpInformation name={'Organization “Lorem Ipsum 2”'}
				                     description={'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.'}
				                     target={'Ut, aliquam, purus, sit, amet'}
				/>
				<HomeHelpInformation name={'Organization “Lorem Ipsum 3”'}
				                     description={'Scelerisque in dictum non consectetur a erat nam.'}
				                     target={'Mi, quis, hendrerit, dolor'}
				/>
			</>}
			{page === 2 && <>
				<HomeHelpInformation name={'Organization “Lorem Ipsum 4”'}
				                     description={'Quis varius quam quisque id diam vel quam elementum pulvinar.'}
				                     target={'Quis varius quam quisque id diam vel quam elementum pulvinar.'}
				/>
				<HomeHelpInformation name={'Organization “Lorem Ipsum 5”'}
				                     description={'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.'}
				                     target={'Ut, aliquam, purus, sit, amet'}
				/>
				<HomeHelpInformation name={'Organization “Lorem Ipsum 6”'}
				                     description={'Scelerisque in dictum non consectetur a erat nam.'}
				                     target={'Mi, quis, hendrerit, dolor'}
				/>
			</>}
			<ul className='help__page-changers'>
				<li value={1} onClick={handleChanePage} className={page === 1 ? 'help__page-changer active-changer': 'help__page-changer'}>1</li>
				<li value={2} onClick={handleChanePage} className={page === 2 ? 'help__page-changer active-changer': 'help__page-changer'}>2</li>
			</ul>
		</HomeHelpInformations>
	)
}
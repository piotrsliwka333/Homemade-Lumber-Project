import React from "react";
import {HomeHelpInformation} from "./HomeHelpInformation";

export const HomeHelpInformations = (props) => {
	const {information} = props

	return (
		<div className='container'>
			<div className='row'>
				<p className='col-8 col-md-8 col-xl-6 help__information'>
					{information}
				</p>
				{props.children}
			</div>
		</div>
	)
}
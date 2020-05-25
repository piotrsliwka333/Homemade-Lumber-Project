import React from "react";

const GiveThingsJumbotronSteps = (props) => {
	return (
		<div className='things-jumbotron__steps'>
			{props.children}
		</div>
	)
}

const GiveThingsJumbotronStepsElement = (props) => {
	const {number, name} = props
	return (
		<div className='things-jumbotron__steps__element'>
			<p className='things-jumbotron__steps__element-text'><span className='number'>{number}</span>{name}</p>
		</div>
	)
}

export const GiveThingsJumbotron = () => {
	return (
		<section className='things-jumbotron'>
			<div className='container'>
				<div className='row'>
					<div className='col-11 col-md-8 col-xl-6 box'>
						<h1 className='things-jumbotron__title'>
							Give back things you don't want anymore
						</h1>
						<img className='things-jumbotron__decoration' src='../../../assets/Decoration.svg'/>
						<h2 className='things-jumbotron__subtitle'>4 Simple Steps Are Enough</h2>
						<GiveThingsJumbotronSteps>
							<GiveThingsJumbotronStepsElement name='Choose things' number='1'/>
							<GiveThingsJumbotronStepsElement name='Pack the bags' number='2'/>
							<GiveThingsJumbotronStepsElement name='Choose Foundation' number='3'/>
							<GiveThingsJumbotronStepsElement name='Order a courier' number='4'/>
						</GiveThingsJumbotronSteps>
					</div>
				</div>
			</div>

		</section>
	)
}
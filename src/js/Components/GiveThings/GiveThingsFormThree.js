import React, {useEffect, useState} from "react"

export const GiveThingsFormThree = (props) => {
	const {onChooseCity, onCity,onGroupPeople,groupPeople ,onOrganization,organization,cityError,setCityError,groupPeopleError} = props
	const [selectBox,setSelectBox] = useState(false)
	const [people,setPeople] = useState(groupPeople);


	useEffect(() => {
		setPeople(groupPeople)
	},[groupPeople])


	const handleHideSelectBox = () => {
		setCityError();
		setSelectBox(false)
	}

	const handleOpenSelectBox = () => {
		setSelectBox(!selectBox)
	}

	return (
		<div className='form-three'>
			<p className='form-step'>Step 3/4</p>
			<h3 className='form-title'>Location:</h3>
			<form className='form-three__form'>
				<div className='box'>
					<div onClick={handleOpenSelectBox} className={selectBox ? 'selected active' : 'selected'}>
						<p className={cityError ? 'error' : null}>
							{onCity}
						</p>
					</div>
					{selectBox && <div className='select-box select-box__form-three'>
						<div  className='option'>
							<label >
								<input onClick={handleHideSelectBox} onChange={e => onChooseCity(e)}   type='radio' name='bags' value='Poznań'/>
								Poznań
							</label>
						</div>
						<div className='option'>
							<label>
								<input onClick={handleHideSelectBox} onChange={e => onChooseCity(e)}   type='radio' name='bags' value='Warsaw'/>
								Warsaw
							</label>
						</div>
						<div className='option'>
							<label>
								<input onClick={handleHideSelectBox} onChange={e => onChooseCity(e)}  type='radio' name='bags' value='Kracow'/>
								Kracow
							</label>
						</div>
						<div className='option'>
							<label>
								<input onClick={handleHideSelectBox} onChange={e => onChooseCity(e)} type='radio' name='bags' value='Wroclav'/>
								Wroclav
							</label>
						</div>
						<div className='option'>
							<label>
								<input onClick={handleHideSelectBox} onChange={e => onChooseCity(e)}  type='radio' name='bags' value='Katowice'/>
								Katowice
							</label>
						</div>
					</div>}
				</div>
				<fieldset className='group-people'>
					<legend className={groupPeopleError ? 'group-people__title error' : 'group-people__title'}>Who you want help ?</legend>
					<div className='container'>
						<div className='row'>
							<label className='group-people__label col-6 col-md-6 col-xl-3'>
								<input name='children' value='children' onChange={e => onGroupPeople(e,people)}
								       defaultChecked={people.children} type='checkbox' className='group-people__input children'/>
							</label>
							<label className='group-people__label col-5 col-md-5 col-xl-5'>
								<input name='singleMothers' value='children' onChange={e => onGroupPeople(e,people)}
								       defaultChecked={people.singleMothers} type='checkbox' className='group-people__input single-mothers'/>
							</label>
							<label className='group-people__label col-5 col-md-5 col-xl-3'>
								<input name='homeless' value='children' onChange={e => onGroupPeople(e,people)}
								       defaultChecked={people.homeless} type='checkbox' className='group-people__input homeless '/>
							</label>
							<label className='group-people__label col-6 col-md-6 col-xl-6'>
								<input name='disabled' value='children' onChange={e => onGroupPeople(e,people)}
								       defaultChecked={people.disabled} type='checkbox' className='group-people__input disabled'/>
							</label>
							<label className='group-people__label col-8 col-md-8 col-xl-5'>
								<input name='elderPeople' value='children' onChange={e => onGroupPeople(e,people)}
								       defaultChecked={people.elderPeople} type='checkbox' className='group-people__input elder-people'/>
							</label>
						</div>
					</div>
				</fieldset>
				<fieldset className='organization'>
					<label className='organization__label'>Enter exact name of specific organization (optional)</label>
					<input value={organization} onChange={e => onOrganization(e)} className='organization__input' type='text' />
				</fieldset>
			</form>
		</div>
	)
}
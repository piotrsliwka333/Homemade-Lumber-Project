import React, {useState} from "react";

export const GiveThingsFormOne = (props) => {
	const {onType,currentType} = props
	const [type,setType] = useState(currentType)

	return (
		<div className='form-one'>
			<p className='form-step'>Step 1/4</p>
			<h3 className='form-title'>Choose what you want give:</h3>
			<form className='form-one__form'>
				<label className='form-one__form__label'>
					<input name='things' value='goodClothes' defaultChecked={type === 'goodClothes'}   onChange={e => onType(e)}  type='radio' className='form-one__form__input' />
					clothes in good conditions
				</label>
				<label className='form-one__form__label'>
					<input name='things' value='badClothes' defaultChecked={type === 'badClothes'}  type='radio' onChange={e => onType(e)} className='form-one__form__input'/>
					clothes in bad condition
				</label>
				<label className='form-one__form__label'>
					<input name='things' value='toys' type='radio' defaultChecked={type === 'toys'} onChange={e => onType(e)} className='form-one__form__input'/>
					toys
				</label>
				<label className='form-one__form__label'>
					<input name='things' value='books' type='radio' defaultChecked={type === 'books'} onChange={e => onType(e)} className='form-one__form__input'/>
					books
				</label>
				<label className='form-one__form__label'>
					<input name='things' value='another' type='radio' defaultChecked={type === 'another'} onChange={e => onType(e)} className='form-one__form__input'/>
					another
				</label>
			</form>
		</div>

	)
}
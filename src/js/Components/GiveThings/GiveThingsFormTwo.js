import React, {useState} from "react";

export const GiveThingsFormTwo = (props) => {
	const {onBagsAmount,onBagsAmountFn} = props
	const [selectBox,setSelectBox] = useState(true)


	const handleHideSelectBox = () => {
		setSelectBox(false)
	}

	const handleOpenSelectBox = () => {
		setSelectBox(!selectBox)
	}

	const style = {

	}

	return (
		<div className='form-two'>
			<p className='form-step'>Step 2/4</p>
			<h3 className='form-title'>Enter the number of 60l bags you have packed into:</h3>

			<form className='form-two__form'>
				<span className='form-two__form__amount'>Amount 60l bags:</span>
				<div className='box'>
					<div onClick={handleOpenSelectBox} className={selectBox ? 'selected active' : 'selected'}>
						<p>
							{onBagsAmount}
						</p>
					</div>

					{selectBox && <div className='select-box'>
						<div  className='option'>
							<label >
								<input onClick={handleHideSelectBox} onChange={e => onBagsAmountFn(e)} id='bagOne' type='radio' name='bags' value='1 bag'/>
								1 bag
							</label>
						</div>
						<div className='option'>
							<label>
								<input onClick={handleHideSelectBox}  onChange={e => onBagsAmountFn(e)} id='bagOne' type='radio' name='bags' value='2 bags'/>
								2 bags
							</label>
						</div>
						<div className='option'>
							<label>
								<input onClick={handleHideSelectBox} onChange={e => onBagsAmountFn(e)} id='bagOne' type='radio' name='bags' value='3 bags'/>
								3 bags
							</label>
						</div>
						<div className='option'>
							<label>
								<input onClick={handleHideSelectBox} onChange={e => onBagsAmountFn(e)} id='bagOne' type='radio' name='bags' value='4 bags'/>
								4 bags
							</label>
						</div>
						<div className='option'>
							<label>
								<input onClick={handleHideSelectBox} onChange={e => onBagsAmountFn(e)} id='bagOne' type='radio' name='bags' value='5 bags'/>
								5 bags
							</label>
						</div>
					</div>}
				</div>
			</form>
		</div>
	)
}
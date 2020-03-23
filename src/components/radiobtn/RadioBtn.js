import React from 'react';
import "./RadioBtn.css";

const RadioBtn = () => {
	const datas = [ 'Female', 'Male', 'Other', 'Disabled' ];

	return (
		<div className="radio">
			<span className="radio__title">Gender</span>
			{datas.map((data) => {
				return (
					<label htmlFor={data} className="radio__ctn" key={data}>
						<input
							type="radio"
							className="radio__input"
							name="gender"
							id={data}
							value={data}
							disabled={data === 'Disabled' ? true : false}
						/>
						<span className="radio--fake" />
						<span className="radio__option" >{data === 'Disabled' ? 'Disabled option' : data}</span>
					</label>
				);
			})}
		</div>
	);
};

export default RadioBtn;

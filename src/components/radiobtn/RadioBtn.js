import React from 'react';

const RadioBtn = () => {
	const datas = [ 'Female', 'Male', 'Other', 'Disabled' ];

	return (
		<div className="radio">
			<span>Gender</span>
			{datas.map((data) => {
				return (
					<div className="radio__ctn" key={data}>
						<input
							type="radio"
							className="radio__input"
							name="gender"
							id={data}
							value={data}
							disabled={data === 'Disabled' ? true : false}
						/>
						<span className="radio--fake" />
						<label htmlFor={data}>{data === 'Disabled' ? 'Disabled option' : data}</label>
					</div>
				);
			})}
		</div>
	);
};

export default RadioBtn;

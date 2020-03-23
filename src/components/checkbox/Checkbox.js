import React, { useState, useRef, useEffect } from 'react';
import './Checkbox.scss';

const Checkbox = () => {
	const [ options, setOptions ] = useState([
		{ country: 'Japan', id: 1, checked: false },
		{ country: 'Korea', id: 2, checked: false },
		{ country: 'Singapore', id: 3, checked: false },
		{ country: 'Taiwan', id: 4, checked: false }
	]);

	const parentRef = useRef();

	const handleAllChecked = (e) => {
		let copyOptions = [ ...options ];
		copyOptions.forEach((place) => (place.checked = e.target.checked));
		setOptions(copyOptions);
	};

	const handleOptions = (e) => {
		let copyOptions = [ ...options ];
		copyOptions.forEach((opt) => {
			if (opt.country === e.target.value) opt.checked = e.target.checked;
		});
		setOptions(copyOptions);
		let checkedOptions = [];
		copyOptions.forEach((opt) => {
			if (opt.checked) {
				checkedOptions.push(opt);
			}
		});

		let checkedCount = checkedOptions.length;
		let totalCount = options.length;
		//console.log(checkedCount, totalCount);
		if (checkedCount < totalCount && checkedCount > 0) {
			parentRef.current.indeterminate = true;
		} else if (checkedCount === totalCount) {
			parentRef.current.checked = true;
			parentRef.current.indeterminate = false;
		} else {
			parentRef.current.indeterminate = false;
			parentRef.current.checked = false;
		}
	};

	return (
		<div className="checkbox">
            <label htmlFor="option" className="checkbox__label checkbox__label--parent">
      
				<input
					type="checkbox"
					id="option"
					ref={parentRef}
					onChange={handleAllChecked}
					className="checkbox__input checkbox__input--main"
				/>
                
				<span className="checkbox--fake"/>
                {/* <span>All</span> */}
			</label>
    
			<ul className="checkbox__list">
				{options.map((opt, i) => {
					return (
						<li key={opt.id} className="checkbox__list--item">
							<label htmlFor={opt.country} className="checkbox__label checkbox__label--subOption">
								<input
									type="checkbox"
									name={opt.country}
									className="checkbox__input checkbox__input--subOpt"
									checked={opt.checked}
									onChange={handleOptions}
									value={opt.country}
								/>
								<span className="checkbox--fake"/>
								{/* <span>{opt.country}</span> */}
							</label>
						</li>
					);
				})}
			</ul>
            {/* <label htmlFor="disabled" className="checkbox__label--disabled">
            <input type="checkbox" disabled className=" checkbox__input checkbox__input--disabled"/>
            Disabled
            </label> */}
		</div>
	);
};

export default Checkbox;

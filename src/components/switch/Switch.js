import React from 'react';
import './Switch.scss';

const Switch = ({checkStatus, handleMode}) => {
	return (
		<div classNameName="switch">
			<label className="switch__label">
                <span 
                className="switch__title"> Dark Mode</span>
                <input 
                type="checkbox"
                checked={checkStatus}
                onChange={handleMode}
                className="switch__input" />
				<span className="switch--fake" />
			</label>
			<br />
			<label className="switch__label">
				<input type="checkbox" className="switch__input" />
				<span className="switch--fake" />
			</label>
		</div>
	);
};

export default Switch;

import React from 'react';
import './Switch.scss';

const Switch = ({modeSwitch, handleMode}) => {
	return (
		<div className="switch">
			<label htmlFor="mode" className="switch__label">
                <span 
                className="switch__title"> Dark Mode is <b>{ modeSwitch ? "on":"off" }</b></span>
                <input 
                type="checkbox"
                checked={modeSwitch}
                onChange={handleMode}
                name ="mode"
                id="mode"
                className="switch__input" />
				<span className="switch--fake" />
			</label>
			<br />
			<label className="switch__label">
                <input type="checkbox" 
                className="switch__input" 
                name="drag"
                />
				<span className="switch--fake" />
			</label>
		</div>
	);
};

export default Switch;

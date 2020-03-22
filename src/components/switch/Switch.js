import React from 'react';
import './Switch.scss';

const Switch = ({ modeSwitch, handleMode }) => {
	return (
		<div className="switch">
			<span className="switch__title">
				Dark Mode: <b>{modeSwitch ? 'ON' : 'OFF'}</b>
			</span>
			<label htmlFor="enabled" className="switch__label">
				<input
					type="checkbox"
					checked={modeSwitch}
					onChange={handleMode}
					name="enabled"
					id="enabled"
					className="switch__input switch__input--enabled"
				/>
				<span className="switch--fake" />
			</label>

			<span className="switch__title">Disabled: OFF</span>
			<label htmlFor="disabled" className="switch__label">
				<input
					type="checkbox"
					disabled="disabled"
					name="disabled"
					id="disabled"
					checked="checked"
					className="switch__input switch__input--disabled"
				/>
				<span className="switch--fake" />
			</label>
            <span className="switch__title">
					dragable: OFF
				</span>
			<label htmlFor="dragable" className="switch__label">
				<input
					type="checkbox"
					name="dragable"
					id="dragable"
					className="switch__input switch__input--dragable"
				/>
				<span className="switch--fake" />
			</label>
		</div>
	);
};

export default Switch;

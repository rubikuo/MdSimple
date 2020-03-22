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

			<span className="switch__title">
                Switch OFF <br/>
                Disabled mode: </span>
			<label htmlFor="disabled-off" className="switch__label">
				<input
					type="checkbox"
					disabled="disabled"
					name="disabled-off"
					id="disabled-off"
					className="switch__input switch__input--disabled-off"
				/>
				<span className="switch--fake" />
			</label>
            <span className="switch__title">
					Switch off with Disabled mode: 
				</span>
			<label htmlFor="disabled-on" className="switch__label">
				<input
					type="checkbox"
					name="disabled-on"
                    id="disabled-on"
                    checked={true}
                    disabled="disabled"
					className="switch__input switch__input--disabled-on"
				/>
				<span className="switch--fake" />
			</label>
            <span className="switch__title">
					Draggable
				</span>

            <label htmlFor="draggable" className="switch__label">
				<input
					type="checkbox"
					name="draggable"
                    id="draggable"
                    draggable={true}
					className="switch__input switch__input--draggable"
				/>
				<span className="switch--fake" />
			</label>
		</div>
	);
};

export default Switch;

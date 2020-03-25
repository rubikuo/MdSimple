import React from 'react';
import styles from './TextField.module.css';
import { MdError } from 'react-icons/md';

const TextField = ({ inputValue, handleInputValue, errorMsg, blur, setBlur, focus, setFocus, setErrorMsg }) => {
	let inputClassName;
	if (errorMsg !== '') {
		inputClassName = [ styles.textField__input, styles[`textField__input--type-error`] ].join(' ');
	} else {
		inputClassName = [ styles.textField__input, styles[`textField__input--type-required`] ].join(' ');
	}
	if (inputValue === '' || inputValue.length >= 8) {
		inputClassName = [ styles.textField__input, styles[`textField__input--type-required`] ].join(' ');
	}

	let helpErrorMsg;
	if (errorMsg !== '') {
		helpErrorMsg = errorMsg;
	}
	if (inputValue.length >= 8) {
		helpErrorMsg = '';
	}

	let labelClass;

	if (focus === true) {
		labelClass = [ styles[`textField__labelText--top`], styles[`textField__labelText--top-focus`] ].join(' ');
	} else if (inputValue.length > 0 && focus === false) {
		labelClass = styles[`textField__labelText--top`];
	} else {
		labelClass = styles.textField__labelText;
	}

	const onBlur = () => {
		setBlur(true);
		setFocus(false);
		if (inputValue === '') {
			setErrorMsg('');
		}
	};

	const onFocus = () => {
		setFocus(true);
		setBlur(false);
	};

	return (
		<div className={styles.textField}>
			<div className={styles.textField__Ctn}>
				<input
					onChange={handleInputValue}
					value={inputValue}
					type="text"
					name="required"
					className={inputClassName}
					onBlur={onBlur}
					onFocus={onFocus}
				/>
				{errorMsg !== '' && <MdError className={styles.textField__errorIcon} />}
				<label id="required" className={labelClass}>
					Text
				</label>
				<div className={styles.textField__underLine} />
			</div>
			<span className={styles.textField__helpText}>Required*</span>

			{blur ? null : inputValue.length === 0 ? null : (
				<span className={[ styles.textField__helpText, styles[`textField__helpText--type-error`] ].join(' ')}>
					{helpErrorMsg}
				</span>
			)}

			<div className={styles.textField__Ctn}>
				<input
					onChange={handleInputValue}
					type="text"
					name="disabled"
					className={[ styles.textField__input, styles[`textField__input--type-disabled`] ].join(' ')}
					disabled={true}
				/>
				<label
					id="disabled"
					className={[ styles[`textField__labelText`], styles[`textField__labelText--disabled`] ].join(' ')}
				>
					Text
				</label>
				<div className={styles.textField__underLine} />
			</div>
			<span className={[ styles.textField__helpText, styles[`textField__helpText--type-disabled`] ].join(' ')}>
				Disabled
			</span>
			<button className={styles.textField__btn} type="submit">
				Submit
			</button>
		</div>
	);
};

export default TextField;

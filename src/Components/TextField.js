import React from 'react';
import styles from './TextField.module.css';

const TextField = ({ inputType, inputsValue, handleInputValue }) => {
	
	return (
		<div className={styles.textField}>
			<div className={styles.textField__Ctn}>
				<input
					onChange={handleInputValue}
					value={inputsValue[inputType]}
					type="text"
					name={inputType}
					className={[ styles.textField__input, 
						         styles[`textField__input--type-${inputType}`] ].join(' ')}
					disabled={inputType === 'disabled' ? 'disabled' : ''}
				/>
				<label
					className={
						inputType === 'disabled' ? (
							styles.textField__labelText
						) : inputsValue[inputType] !== '' ? (
							styles[`textField__labelText--up`]
							
						) : (
							styles.textField__labelText
						)
					}
				>
					Text
				</label>
				<div className={styles.textField__underLine} />
			</div>
			<span
				className={[ styles.textField__errorMsg, styles[`textField__errorMsg--type-${inputType}`] ].join(' ')}
			>
				Help Text:
			</span>
		</div>
	);
};

export default TextField;

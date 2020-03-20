import React, { useState } from 'react';
import styles from './TextField.module.css';

const TextField = ({ inputType }) => {
	return (
		<div className={styles.textField}>
			<div className={styles.textField__Ctn}>
				<input
					type="text"
					className={styles.textField__input}
					disabled={inputType === 'disabled' ? 'disabled' : ''}
				/>
				<label htmlFor="" className={styles.textField__labelText}>
					Text
				</label>
				<div className={styles.textField__underLine} />
			</div>
			{/*why BEM undefined??? */}
			<span className={[styles.textField__errorMsg, styles[`textField__errorMsg--type-${inputType}`]].join(" ") }>
				Help Text:
			</span>
		</div>
	);
};

export default TextField;

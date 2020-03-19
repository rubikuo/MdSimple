import React, { useState } from 'react';
import styles from './TextField.module.css';

const TextField = ({ classNames }) => {
  const [ inputValue, updateInputValue ] = useState('');
	

	return (
		<div className={styles.textField}>
			<div className={styles.textField__Ctn}>
				<input
					type="text"
					className={styles.textField__input}
					disabled={classNames === 'disabled' ? 'disabled' : ''}
				/>
				<label htmlFor="" className={styles.textField__labelText}>
					Text
				</label>
				<div className={styles.textField__underLine} />
			</div>
			<span className={`${styles.textField__errorMsg} ${styles[`textField__errorMsg--${classNames}`]}`}>Error: </span>
		</div>
	);
};

export default TextField;

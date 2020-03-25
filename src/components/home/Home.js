/* implement only Css module */
import React from 'react';
import styles from './Home.module.css';

const Home = ({ components, setCurrentPage }) => {
	const handleCurrentPage = (page) => {
		console.log(page);
		setCurrentPage(page);
	};

	return (
		<div className={styles.homeCtn}>
			<button className={styles.options} onClick={() => handleCurrentPage('TextField')}>
				TextField
			</button>
			<button className={styles.options} onClick={() => handleCurrentPage('Switch')}>
				Switch
			</button>
			<button className={styles.options} onClick={() => handleCurrentPage('Check Box')}>
				Checkbox
			</button>
			<button className={styles.options} onClick={() => handleCurrentPage('Radio Button')}>
				Radio Button
			</button>
		</div>
	);
};

export default Home;

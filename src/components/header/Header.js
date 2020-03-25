import React from 'react';
import styles from './Header.module.css';
import { FaBatteryHalf, FaSignal, FaWifi } from 'react-icons/fa';
import { MdMoreVert, MdSearch } from 'react-icons/md';
import { FiArrowLeft } from 'react-icons/fi';

const Header = ({ currentPage, setCurrentPage, mode }) => {
	let title;
	if (currentPage === 'home') {
		title = 'MD SIMPLE';
	} else {
		title = currentPage;
	}
	return (
		<div className={`${styles.header__ctn}, ${styles[`header__ctn--${mode}`]}`}>
			<div className={[ styles.header__iconBar, styles[`header__iconBar--${mode}`] ].join(' ')}>
				<div className={styles.header__lefticons}>
					<FaSignal />
					<span>Tele3</span>
					<FaWifi />
				</div>
				<FaBatteryHalf className={styles.header__righticons} />
			</div>
			<div className={styles.header__content}>
				<div className={`${styles.header__content} ${styles['header__content--left']}`}>
					{currentPage !== 'home' && (
						<button onClick={() => setCurrentPage('home')} className={styles.header__btn}>
							<FiArrowLeft className={styles['header__btn--arrow']} />
							<div className={styles['header__btn--boxShadow']} />
						</button>
					)}
					<span className={styles['header__content--title']}>{title}</span>
				</div>
				<div className={`${styles.header__content} ${styles['header__content--right']}`}>
					<MdSearch />
					<MdMoreVert />
				</div>
			</div>
			<nav />
		</div>
	);
};

// const MemoHeader  = React.memo(Header);

export default Header;

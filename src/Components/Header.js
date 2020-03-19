import React from 'react';
import styles from './Header.module.css';
import { FaBatteryHalf, FaSignal, FaWifi } from 'react-icons/fa';
import { MdMoreVert, MdSearch } from 'react-icons/md';
import { FiArrowLeft } from 'react-icons/fi';

const Header = () => {
	return (
		<div className={styles.header__ctn}>
			<div className={styles.header__iconBar}>
				<div className={styles['header__iconBar--left']}>
					<FaSignal />
					<span>Tele3</span>
					<FaWifi />
				</div>
				<FaBatteryHalf className={styles['header__iconBar--right']} />
			</div>
			<div className={styles.header__content}>
				<div className={styles['header__content--left']}>
					<FiArrowLeft />
				</div>
				<div className={styles['header__content--left']}>
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

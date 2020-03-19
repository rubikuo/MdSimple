import React from "react";
import styles from "./Header.module.css";
import {FaBatteryHalf, FaSignal} from "react-icons/fa";
 

const Header = () =>{

return (
    <div className={styles.header__ctn}>
        <div className={styles.header__iconBar}>
        <FaBatteryHalf />
        <FaSignal />
        </div>
    <nav>
    </nav>
    </div>
)


}

const MemoHeader  = React.memo(Header);

export default MemoHeader;
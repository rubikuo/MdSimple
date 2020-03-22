/* implement only Css module */
import React, {useState} from 'react';
import styles from './Home.module.css';

const Home = ({ components, setCurrentPage}) => {
     const handleCurrentPage =(page)=>{
         console.log(page)
         setCurrentPage(page)
     }

	return (
		<div className={styles.homeCtn}>
			<div className={styles.options} onClick={()=>handleCurrentPage("TextField")}>TextField</div>
			<div className={styles.options} onClick={()=>handleCurrentPage("Switch")}>Switch</div>
			<div className={styles.options} onClick={()=>handleCurrentPage("Check Box")}>Checkbox</div>
			<div className={styles.options} onClick={()=>handleCurrentPage("Radio Button")}>Radio Button</div>

			{/** why??? */}
			{/* {components.map((comp) =>{
                return(
                    <div key={comp} className={styles.comp}> 
                        {comp}
                    </div>
                )
            })} */}
		</div>
	);
};

export default Home;

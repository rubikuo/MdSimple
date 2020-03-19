/* implement only Css module */
import React from "react";
import styles from "./Home.module.css";


const Home = ({components}) =>{
    return (
        <div className={styles.homeCtn}>
            <div className={styles.textField}>

            </div>
            <div className={styles.switch}>

            </div>
            <div className={styles.checkbox}>

            </div>
            <div className={styles.radioBtn}>

            </div>

            {/** why??? */}
            {/* {components.map((comp) =>{
                return(
                    <div key={comp} className={styles.comp}> 
                        {comp}
                    </div>
                )
            })} */}

            </div>

      
    )


}

export default Home;
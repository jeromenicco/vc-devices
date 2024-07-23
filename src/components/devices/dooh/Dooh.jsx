import React from 'react'
import styles from './Dooh.module.css';
import vcPlanet from '../../../assets/vc-planet.svg';

function Dooh() {
    return (
        <div className={styles.container}>
            <div className={styles.outerFrame}>
                <div className={styles.innerFrame}>

                    <div className={styles.content}>
                        <h3>Dooh</h3>
                        <p>Nous en maitrisons les codes et les contraintes. TikTok, Instagram, Shorts et même preroll 16:9.</p>
                    </div>

                    <img className={styles.svg} src={vcPlanet} alt="Vc planet" />


                </div>
            </div>

            <div className={styles.baseTop}></div>
            <div className={styles.baseBottom}></div>

        </div>
    )
}

export default Dooh
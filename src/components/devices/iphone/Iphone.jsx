import React from 'react';
import styles from './Iphone.module.css';
import vcPlanet from '../../../assets/vc-planet.svg';

function Iphone() {
    return (
        <div className={styles.outerFrame}>

            <div className={styles.volumeButtons}>
                <div className={styles.volumeUp}></div>
                <div className={styles.volumeDown}></div>
            </div>

            <div className={styles.holdButton}></div>

            <div className={styles.innerFrame}>
                <div className={styles.notch}></div>

                <div className={styles.content}>
                    <h3>Social ads</h3>
                    <p>Nous en maitrisons les codes et les contraintes. TikTok, Instagram, Shorts et même preroll 16:9.</p>
                </div>


                <img className={styles.svg} src={vcPlanet} alt="Vc planet" />


            </div>

        </div>
    )
}

export default Iphone;

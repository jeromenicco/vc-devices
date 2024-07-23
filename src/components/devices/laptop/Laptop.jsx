import React from 'react'
import styles from './Laptop.module.css';
import vcPlanet from '../../../assets/vc-planet.svg';


function Laptop() {
    return (
        <div className={styles.container}>
            <div className={styles.outerFrame}>
                <div className={styles.innerFrame}>
                    <div className={styles.innerNotch}></div>

                    <div className={styles.content}>
                        <h3>Owned platforms</h3>
                        <p>Site web, Newsletter, e-commerce... Nous anticipons les déclinaisons nécessaire au rayonnement de vos campagnes.</p>
                    </div>

                    <img className={styles.svg1} src={vcPlanet} alt="Vc planet" />
                    <img className={styles.svg2} src={vcPlanet} alt="Vc planet" />


                </div>

            </div>

            <div className={styles.base}>
                <div className={styles.baseNotch}></div>



            </div>
        </div>
    )
}

export default Laptop
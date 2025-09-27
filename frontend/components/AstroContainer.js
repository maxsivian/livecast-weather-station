"use client"
import React from 'react'
import styles from "./Card.module.css"
import styles1 from "./AstroContainer.module.css"
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardCurve from "./CardCurve"


const moonPhasesObj = {
    "New Moon": "🌑",
    "Waxing Crescent": "🌒",
    "First Quarter": "🌓",
    "Waxing Gibbous": "🌔",
    "Full Moon": "🌕",
    "Waning Gibbous": "🌖",
    "Last Quarter": "🌗",
    "Waning Crescent": "🌘"
}

const AstroContainer = () => {

    const astroArray = useSelector((state) => state.weather.astroArray)
    const weekDaysArray = useSelector((state) => state.weather.weekDaysArray)
    const datesArray = useSelector((state) => state.weather.datesArray)

    // useEffect(() => {
    //     console.log("astroArray", astroArray);
    // }, [astroArray])

    return (
        <>
            <div className={styles.mainContainer}>
                {astroArray.length === 0 ? "No data to show" : ""}
                {astroArray.map((value, index) => {
                    return (
                        <div className={styles.cardContainer} key={index}>
                            <div className={styles.cardHeader}>
                                <div className={styles.leftBox}>
                                </div>
                                
                                <CardCurve />

                                <div className={styles.textLeft}>
                                    <div>
                                        {weekDaysArray[index]}
                                    </div>
                                    <div className={styles.date}>
                                        {datesArray[index]}
                                    </div>
                                </div>
                                <div className={`${styles.textRight} ${styles1.textRight}`}>
                                    <div className={styles.weatherIcon} >{moonPhasesObj[value.astro.moon_phase]}</div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.dataC}>
                                    <div>Moon Up ?: </div>
                                    <div>{value.astro.is_moon_up ? "YES" : "NO"}</div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Sun Up?: </div>
                                    <div>{value.astro.is_sun_up ? "YES" : "NO"}</div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Moon Illumination: </div>
                                    <div>{value.astro.moon_illumination} %</div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Phase: </div>
                                    <div>{value.astro.moon_phase}</div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Moonrise: </div>
                                    <div>{value.astro.moonrise}</div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Moonset:  </div>
                                    <div>{value.astro.moonset}</div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Sunrise: </div>
                                    <div>{value.astro.sunrise}</div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Sunset: </div>
                                    <div>{value.astro.sunset}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default AstroContainer


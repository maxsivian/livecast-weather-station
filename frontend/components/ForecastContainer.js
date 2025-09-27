"use client"
// import styles from "./ForecastContainer.module.css"
import styles from "./Card.module.css"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { getColor_Temperature, getColor_Rainfall, getColor_Humidity, getColor_Visibility, getColor_UV_Index, getColor_Gust, getColor_Snow } from "@/scripts/color.js"
import CardCurve from "./CardCurve"


const ForecastDataBox = () => {

    const forecastArray = useSelector((state) => state.weather.forecastArray)
    const datesArray = useSelector((state) => state.weather.datesArray)
    const weekDaysArray = useSelector((state) => state.weather.weekDaysArray)

    return (
        <>
            <div className={styles.mainContainer}>
                {forecastArray.length === 0 ? "No data to show" : ""}
                {forecastArray.map((value, index) => {
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
                                <div className={styles.textRight}>
                                    <img src={value.day.condition.icon} alt="" className={styles.weatherIcon} />
                                </div>
                            </div>
                            <div className={styles.card}>

                                <div className={styles.dataC}>
                                    <div>Avg. Temperature: </div>
                                    <div className={styles.answer}>
                                        <div className={getColor_Temperature(value.day.avgtemp_c)}>{value.day.avgtemp_c}</div>
                                        <span>°C</span>
                                    </div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Max Temperature:  </div>
                                    <div className={styles.answer}>
                                        <div className={getColor_Temperature(value.day.maxtemp_c)}>{value.day.maxtemp_c}</div>
                                        <span>°C</span>
                                    </div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Min Temperature: </div>
                                    <div className={styles.answer}>
                                        <div className={getColor_Temperature(value.day.mintemp_c)}>{value.day.mintemp_c}</div>
                                        <span>°C</span>
                                    </div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Total Rainfall: </div>
                                    <div className={styles.answer}>
                                        <div className={getColor_Rainfall(value.day.totalprecip_mm)}>{value.day.totalprecip_mm}</div>
                                        <span>mm</span>
                                    </div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Avg. Humidity: </div>
                                    <div className={styles.answer}>
                                        <div className={getColor_Humidity(value.day.avghumidity)}>{value.day.avghumidity}</div>
                                        <span>%</span>
                                    </div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Avg. Visibility: </div>
                                    <div className={styles.answer}>
                                        <div className={getColor_Visibility(value.day.avgvis_km)}>{value.day.avgvis_km}</div>
                                        <span>km</span>
                                    </div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Avg. UV Index: </div>
                                    <div className={styles.answer}>
                                        <div className={getColor_UV_Index(value.day.uv)}>{value.day.uv}</div>
                                    </div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Max Wind: </div>
                                    <div className={styles.answer}>
                                        <div className={getColor_Gust(value.day.maxwind_kph)}>{value.day.maxwind_kph}</div>
                                        <span>kmph</span>
                                    </div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Total Snow: </div>
                                    <div className={styles.answer}>
                                        <div className={getColor_Snow(value.day.totalsnow_cm)}>{value.day.totalsnow_cm}</div>
                                        <span>cm</span>
                                    </div>
                                </div>
                                <div className={styles.condition}>
                                    {value.day.condition.text}
                                </div>
                                {/* <div className={styles.dataC}>
                                    <div>Chance of rain: </div>
                                    <div>{value.day.daily_chance_of_rain}</div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Chance of snow: </div>
                                    <div>{value.day.daily_chance_of_snow}</div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Will it rain ?:</div>
                                    <div>{value.day.daily_will_it_rain}</div>
                                </div>
                                <div className={styles.dataC}>
                                    <div>Will it snow ?: </div>
                                    <div>{value.day.daily_will_it_snow}</div>
                                </div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ForecastDataBox
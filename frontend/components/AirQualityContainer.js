"use client"
import styles from "./Card.module.css"
import styles1 from "./AirQualityContainer.module.css"
import CardCurve from "./CardCurve"
import { useSelector } from 'react-redux'
import { useEffect } from "react"
import { getColor_PM2_5, getColor_PM10, getColor_CO, getColor_NO2, getColor_O3, getColor_SO2, getColor_AQI } from "@/scripts/color.js"


const AirQualityContainer = () => {

  const airQualityArray = useSelector((state) => state.weather.airQualityArray)
  const weekDaysArray = useSelector((state) => state.weather.weekDaysArray)
  const datesArray = useSelector((state) => state.weather.datesArray)

  // useEffect(() => {
  //   console.log("airQualityArray", airQualityArray);
  // }, [airQualityArray])

  return (
    <>
      <div className={styles.mainContainer}>
        {airQualityArray.length === 0 ? "No data to show":""}

        {airQualityArray.map((value, index) => {

          if (!(value.air_quality?.["us-epa-index"])) return null;
          if (value.air_quality?.aqi_data === "null") return null;

          return (
            <div className={styles.cardContainer} key={index}>
              <div className={styles.cardHeader}>
                <div className={styles.leftBox}>
                </div>
    
                <CardCurve/>

                <div className={styles.textLeft}>
                  <div>
                    {weekDaysArray[index]}
                  </div>
                  <div className={styles.date}>
                    {datesArray[index]}
                  </div>
                </div>
                <div className={`${styles.textRight} ${styles1.textRight}`}>
                  <div>AQI</div>
                  <div className={getColor_AQI(value.air_quality["us-epa-index"])} >{value.air_quality["us-epa-index"]}/6</div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.dataC}>
                  <div>CO: </div>
                  <div className={styles.answer}>
                    <div className={getColor_CO(value.air_quality?.co?.toFixed(3))}>{value.air_quality?.co?.toFixed(3)} </div>
                    <span>µg/m³</span>
                  </div>
                </div>
                <div className={styles.dataC}>
                  <div>NO<sub>2</sub>: </div>
                  <div className={styles.answer}>
                    <div className={getColor_NO2(value.air_quality?.no2?.toFixed(3))}>{value.air_quality?.no2?.toFixed(3)}</div>
                    <span>µg/m³</span>
                  </div>
                </div>

                <div className={styles.dataC}>
                  <div>O<sub>3</sub>: </div>
                  <div className={styles.answer}>
                    <div className={getColor_O3(value.air_quality?.o3?.toFixed(3))}>{value.air_quality?.o3?.toFixed(3)}</div>
                    <span>µg/m³</span>
                  </div>
                </div>

                <div className={styles.dataC}>
                  <div>SO<sub>2</sub>: </div>
                  <div className={styles.answer}>
                    <div className={getColor_SO2(value.air_quality?.so2?.toFixed(3))}>{value.air_quality?.so2?.toFixed(3)}</div>
                    <span>µg/m³</span>
                  </div>
                </div>

                <div className={styles.dataC}>
                  <div>PM2.5: </div>
                  <div className={styles.answer}>
                    <div className={getColor_PM2_5(value.air_quality?.pm2_5?.toFixed(3))}>{value.air_quality?.pm2_5?.toFixed(3)}</div>
                    <span>µg/m³</span>
                  </div>
                </div>

                <div className={styles.dataC}>
                  <div>PM10:  </div>
                  <div className={styles.answer}>
                    <div className={getColor_PM10(value.air_quality?.pm10?.toFixed(3))}>{value.air_quality?.pm10?.toFixed(3)} </div>
                    <span>µg/m³</span>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </>

  )
}
export default AirQualityContainer

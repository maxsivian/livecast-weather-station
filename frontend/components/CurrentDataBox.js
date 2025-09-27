"use client"
import { useState } from 'react'
import styles from "./CurrentDataBox.module.css"
import { useSelector } from "react-redux"
import Loading from './Loading'
import CardCurve from "./CardCurve"
import { getColor_Temperature, getColor_Rainfall, getColor_Humidity, getColor_Pressure, getColor_DewPoint, getColor_Visibility, getColor_UV_Index, getColor_Gust, getColor_Snow } from "@/scripts/color.js"
import { getColor_PM2_5, getColor_PM10, getColor_CO, getColor_NO2, getColor_O3, getColor_SO2, getColor_AQI } from "@/scripts/color.js"


const CurrentDataBox = ({ currentData = {} }) => {

    const datesArray = useSelector((state) => state.weather.datesArray)
    const weekDaysArray = useSelector((state) => state.weather.weekDaysArray)
    const currentWeatherIcon = useSelector((state) => state.weather.currentWeatherIcon)
    const [imageLoading, setImageLoading] = useState(true)

    // console.log("currentData", currentData);

    const {
        dewpoint_c,
        feelslike_c,
        gust_kph,
        heatindex_c,
        humidity,
        is_day,
        precip_mm,
        pressure_mb,
        temp_c,
        uv,
        vis_km,
        wind_degree,
        wind_dir,
        wind_kph,
        windchill_c,
        cloud,

        last_updated,
        condition,
        air_quality
    }
        = currentData

    return (
        <>
            {condition && air_quality && (
                <div className={styles.cardContainer}>
                    <div className={styles.cardHeader}>
                        <div className={styles.left}>
                            <div className={styles.leftBox}></div>
                            <CardCurve/>
                            <div className={styles.textLeft}>
                                <div>
                                    {weekDaysArray[0]}
                                </div>
                                <div>
                                    {datesArray[0]}
                                </div>
                            </div>
                        </div>
                        <div className={styles.middle}>
                            <div className={styles.loading}>
                                {imageLoading && <Loading />}
                            </div>
                            <img
                                // src={condition.icon} 
                                onLoad={() => setImageLoading(false)}
                                src={currentWeatherIcon}
                                alt="" className={styles.weatherIcon} key={condition.icon} />
                        </div>
                        <div className={styles.right}>
                            <CardCurve flip={true}/>
                            <div className={styles.rightBox}></div>
                            <div className={styles.textRight}>
                                <div>
                                    <div>{is_day ? "DAY" : "NIGHT"}</div>
                                </div>
                                <div>
                                    {last_updated.split(" ")[1]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.first}>
                            <div className={styles.condition}>{condition.text.toUpperCase()}</div>

                            <div className={styles.dataC}>
                                <div>Temperature: </div>
                                <div className={styles.answer}>
                                    <div className={getColor_Temperature(temp_c)}>{temp_c}</div>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Temp. (feels like): </div>
                                <div className={styles.answer}>
                                    <div className={getColor_Temperature(feelslike_c)}>{feelslike_c}</div>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Heat Index:  </div>
                                <div className={styles.answer}>
                                    <div className={getColor_Temperature(heatindex_c)}>{heatindex_c}</div>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Rainfall: </div>
                                <div className={styles.answer}>
                                    <div className={getColor_Rainfall(precip_mm)}>{precip_mm}</div> 
                                    <span>mm</span>
                                </div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Humidity: </div>
                                <div className={styles.answer}>
                                    <div className={getColor_Humidity(humidity)}>{humidity}</div>
                                    <span>%</span>
                                </div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Pressure:  </div>
                                <div className={styles.answer}>
                                    <div className={getColor_Pressure(pressure_mb)}>{pressure_mb}</div>
                                    <span>mb</span>
                                </div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Dew Point: </div>
                                <div className={styles.answer}>
                                    <div className={getColor_DewPoint(dewpoint_c)}>{dewpoint_c}</div>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Visibility: </div>
                                <div className={styles.answer}>
                                    <div className={getColor_Visibility(vis_km)}>{vis_km}</div>
                                    <span>km</span>
                                </div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Cloud: </div>
                                <div>{cloud} %</div>
                            </div>
                            <div className={styles.dataC}>
                                <div>UV Index: </div>
                                <div className={styles.answer}>
                                    <div className={getColor_UV_Index(uv)}>{uv}</div>
                                </div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Gust: </div>
                                <div className={styles.answer}>
                                    <div className={getColor_Gust(gust_kph)}>{gust_kph}</div>
                                    <span>kmph</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.second}>
                            <div className={styles.dataC}>
                                <div>Wind Chill: </div>
                                <div className={styles.answer}>
                                    <div className={getColor_Temperature(windchill_c)}>{windchill_c}</div>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Wind Direction: </div>
                                <div>{wind_dir}</div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Wind Degree: </div>
                                <div>{wind_degree}°</div>
                            </div>
                            <div className={styles.dataC}>
                                <div>Wind Speed: </div>
                                <div className={styles.answer}>
                                    <div className={getColor_Gust(wind_kph)}>{wind_kph}</div>
                                    <span>kmph</span>
                                </div>
                            </div>

                            <div>
                                <div className={styles.airQualityHeading}>
                                    Air Quality
                                </div>
                                <div>
                                    <div className={styles.dataC}>
                                        <div>CO: </div>
                                        <div className={styles.answer}>
                                            <div className={getColor_CO(air_quality.co.toFixed(3))}>{air_quality.co.toFixed(3)}</div>
                                            <span>µg/m³</span>
                                        </div>
                                    </div>
                                    <div className={styles.dataC}>
                                        <div>NO<sub>2</sub>: </div>
                                        <div className={styles.answer}>
                                            <div className={getColor_NO2(air_quality.no2.toFixed(3))}>{air_quality.no2.toFixed(3)}</div>
                                            <span>µg/m³</span>
                                        </div>
                                    </div>
                                    <div className={styles.dataC}>
                                        <div>O<sub>3</sub>: </div>
                                        <div className={styles.answer}>
                                            <div className={getColor_O3(air_quality.o3.toFixed(3))}>{air_quality.o3.toFixed(3)}</div>
                                            <span>µg/m³</span>
                                        </div>
                                    </div>
                                    <div className={styles.dataC}>
                                        <div>SO<sub>2</sub>: </div>
                                        <div className={styles.answer}>
                                            <div className={getColor_SO2(air_quality.so2.toFixed(3))}>{air_quality.so2.toFixed(3)}</div>
                                            <span>µg/m³</span>
                                        </div>
                                    </div>
                                    <div className={styles.dataC}>
                                        <div>PM2.5: </div>
                                        <div className={styles.answer}>
                                            <div className={getColor_PM2_5(air_quality.pm2_5.toFixed(3))}>{air_quality.pm2_5.toFixed(3)}</div>
                                            <span>µg/m³</span>
                                        </div>
                                    </div>
                                    <div className={styles.dataC}>
                                        <div>PM10:  </div>
                                        <div className={styles.answer}>
                                            <div className={getColor_PM10(air_quality.pm10.toFixed(3))}>{air_quality.pm10.toFixed(3)}</div>
                                            <span>µg/m³</span>
                                        </div>
                                    </div>
                                    <div className={styles.dataCC}> 
                                        <div>AQI (EPA):</div>
                                        <span className={getColor_AQI(air_quality["us-epa-index"])}>{air_quality["us-epa-index"]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default CurrentDataBox
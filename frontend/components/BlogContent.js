import styles from "./BlogContent.module.css"


const BlogContent = () => {
    
    return (
        <div className={styles.content}>
            <div className={styles.first} id='mt-searchTips'>
                <h1>Search Guide</h1>
                <div>
                    <h2>My Location</h2>
                    <p>Most laptops and desktops don't have GPS, so their location may be inaccurate. Most phones and tablets have GPS, so they provide accurate coordinates.</p>
                </div>
                <div>
                    <h2>City / Town / Village</h2>
                    <p>If results aren't accurate, add the country name. Many places share the same name. Example: Tangi, Bangladesh; Tangi, Pakistan; Tangi, India.</p>
                    <p>Some locations may not be available.</p>
                </div>
                <div>
                    <h2>Latitude, Longitude</h2>
                    <p>Information will be provided based on the nearest latitude and longitude coordinates.</p>
                </div>
                <div className={styles.italic}>
                    <p>If you're seeing only 3 days of weather and astronomy data, and no air quality info, the API has switched to the free version.</p>
                </div>
            </div>

            <div className={styles.second} id="mt-weatherData">
                <h1>Weather Data</h1>
                <div>
                    <h2>Current Weather Data</h2>
                    <div className={styles.tableWrapper}>
                        <table className={`${styles.table} ${styles.t1}`}>
                            <thead>
                                <tr>
                                    <th>Field</th>
                                    <th>Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Temperature</td>
                                    <td>Actual air temperature measured in degree Celcius</td>
                                </tr>
                                <tr>
                                    <td>Temp. (feels like)</td>
                                    <td>Perceived temperature in degrees Celsius, considering air temperature, humidity, and wind speed.</td>
                                </tr>
                                <tr>
                                    <td>Heat Index</td>
                                    <td>Perceived temperature in degrees Celsius, considering only air temperature and humidity.</td>
                                </tr>
                                <tr>
                                    <td>Rainfall</td>
                                    <td>Total precipitation measured in millimeters</td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td>Percentage of moisture in the air</td>
                                </tr>
                                <tr>
                                    <td>Pressure</td>
                                    <td>Atmospheric force exerted per unit area measured in millbars</td>
                                </tr>
                                <tr>
                                    <td>Dew Point</td>
                                    <td>Temperature in degree Celcius at which air becomes saturated, causing dew or fog</td>
                                </tr>
                                <tr>
                                    <td>Visibility</td>
                                    <td>Maximum distance objects are clearly seen, measured in kilometers</td>
                                </tr>
                                <tr>
                                    <td>Cloud</td>
                                    <td>Percentage of sky covered by clouds.</td>
                                </tr>
                                <tr>
                                    <td>UV Index</td>
                                    <td>Scale indicating sunburn risk from UV radiation</td>
                                </tr>
                                <tr>
                                    <td>Gust</td>
                                    <td>Sudden, strong increase in wind speed, measured in kilometers per hour</td>
                                </tr>
                                <tr>
                                    <td>Wind Chill</td>
                                    <td>Perceived temperature due to wind affecting heat loss, measured in degree Celcius</td>
                                </tr>
                                <tr>
                                    <td>Wind Direction</td>
                                    <td>Compass direction where the wind originates</td>
                                </tr>
                                <tr>
                                    <td>Wind Degree</td>
                                    <td>Compass angle indicating wind's direction in degrees</td>
                                </tr>
                                <tr>
                                    <td>Wind Speed</td>
                                    <td>Rate at which the wind blows, measured in kilometers per hour</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h2>Forecast Weather Data</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Field</th>
                                    <th>Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Avg. Temperature</td>
                                    <td>Predicted average air temperature for the day in degree Celsius</td>
                                </tr>
                                <tr>
                                    <td>Max Temperature</td>
                                    <td>Forecasted maximum air temperature for the day in degree Celsius</td>
                                </tr>
                                <tr>
                                    <td>Min Temperature</td>
                                    <td>Forecasted minimum air temperature for the day in degree Celsius</td>
                                </tr>
                                <tr>
                                    <td>Total Rainfall</td>
                                    <td>Expected total precipitation for the day, measured in millimeters</td>
                                </tr>
                                <tr>
                                    <td>Avg. Humidity</td>
                                    <td>Predicted average humidity percentage for the day</td>
                                </tr>
                                <tr>
                                    <td>Avg. Visibility</td>
                                    <td>Expected average visibility distance in kilometers for the day</td>
                                </tr>
                                <tr>
                                    <td>Max UV Index</td>
                                    <td>Forecasted peak UV Index indicating sun exposure risk during the day</td>
                                </tr>
                                <tr>
                                    <td>Max Wind</td>
                                    <td>Predicted maximum wind speed in kilometers per hour for the day</td>
                                </tr>
                                <tr>
                                    <td>Total Snow</td>
                                    <td>Expected total snowfall in centimeters for the day</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className={styles.third} id="mt-airQualityData">

                <h1>Air Quality Data</h1>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Meaning</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CO</td>
                                <td>Carbon monoxide, toxic gas from fuel combustion.</td>
                            </tr>
                            <tr>
                                <td>NO₂</td>
                                <td>Nitrogen dioxide, from vehicles and industrial activity.</td>
                            </tr>
                            <tr>
                                <td>O₃</td>
                                <td>Ground-level ozone, harmful component of smog.</td>
                            </tr>
                            <tr>
                                <td>SO₂</td>
                                <td>Sulfur dioxide, from burning fossil fuels.</td>
                            </tr>
                            <tr>
                                <td>PM2.5</td>
                                <td>Particulate Matter &lt;2.5μm, enters lungs/bloodstream.</td>
                            </tr>
                            <tr>
                                <td>PM10</td>
                                <td>Particulate Matter &lt;10μm, causes respiratory problems.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={`${styles.fourth} ${styles.colorSystemContainer}`} id="mt-colorSystem">
                <h1>Color System</h1>
                <div>
                    <h2>Weather Data</h2>
                    <div className={styles.tableWrapper}>
                        <table className={`${styles.table} ${styles.weatherColorTable}`}>
                            <thead>
                                <tr>
                                    <th className={styles.white}>Field</th>
                                    <th className="violetBg">Purple  <br /> [ very low ]</th>
                                    <th className="blueBg">Blue <br /> [ low ]</th>
                                    <th className="greenBg">Green <br /> [ good ]</th>
                                    <th className="greenyellowBg">GreenYellow <br /> [ acceptable ]</th>
                                    <th className="yellowBg">Yellow <br /> [ moderate ]</th>
                                    <th className="orangeBg">Orange <br /> [ high ]</th>
                                    <th className="pinkBg">Pink <br /> [ very high ]</th>
                                    <th className="redBg">Red <br /> [ extreme ]</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Temperature (°C)</td><td>&lt;1</td><td>&ge;1 - &lt;16</td><td>&ge;16 - &lt;25</td><td>&ge;25 - &lt;30</td><td>&ge;30 - &lt;34</td><td>&ge;34 - &lt;37</td><td>&ge;37 - &lt;40</td><td>&ge;40</td></tr>
                                <tr><td>Temp. (feels like) (°C)</td><td>&lt;1</td><td>&ge;1 - &lt;16</td><td>&ge;16 - &lt;25</td><td>&ge;25 - &lt;30</td><td>&ge;30 - &lt;34</td><td>&ge;34 - &lt;37</td><td>&ge;37 - &lt;40</td><td>&ge;40</td></tr>
                                <tr><td>Heat Index (°C)</td><td>&lt;1</td><td>&ge;1 - &lt;16</td><td>&ge;16 - &lt;25</td><td>&ge;25 - &lt;30</td><td>&ge;30 - &lt;34</td><td>&ge;34 - &lt;37</td><td>&ge;37 - &lt;40</td><td>&ge;40</td></tr>
                                <tr><td>Rainfall (mm)</td><td>-</td><td>-</td><td>&gt;0 - &lt;2.5</td><td>&ge;2.5 - &lt;7.6</td><td>&ge;7.6 - &lt;20</td><td>&ge;20 - &lt;35.5</td><td>&ge;35.5 - &lt;75</td><td>&ge;75</td></tr>
                                <tr><td>Humidity (%)</td><td>&lt;1</td><td>&ge;1 - &lt;30</td><td>&ge;30 - &lt;51</td><td>&ge;51 - &lt;61</td><td>&ge;61 - &lt;71</td><td>&ge;71 - &lt;91</td><td>&ge;91 - &lt;99</td><td>&ge;99</td></tr>
                                <tr><td>Pressure (mb)</td><td>&lt;980</td><td>&ge;980 - &lt;1001</td><td>&ge;1001 - &lt;1021</td><td>-</td><td>-</td><td>&ge;1021 - &lt;1040</td><td>-</td><td>&ge;1040</td></tr>
                                <tr><td>Dew point (°C)</td><td>&lt;1</td><td>&ge;1 - &lt;11</td><td>&ge;11 - &lt;21</td><td>&ge;21 - &lt;25</td><td>-</td><td>&ge;25 - &lt;30</td><td>-</td><td>&ge;30</td></tr>
                                <tr><td>Visibility (km)</td><td>-</td><td>-</td><td>&gt;10</td><td>&ge;7 - &lt;10</td><td>&ge;5 - &lt;7</td><td>&ge;3 - &lt;5 <br /> [low] </td><td>&ge;1 - &lt;3 <br /> [very low] </td><td>&lt;1 <br /> [extremely low]</td></tr>

                                <tr><td>Cloud (%)</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>

                                <tr><td>UV Index</td><td>-</td><td>&lt;1</td><td>&ge;1 - &lt;3</td><td>&ge;3 - &lt;5</td><td>&ge;5 - &lt;8</td><td>&ge;8 - &lt;10</td><td>&ge;10 - &lt;11</td><td>&ge;11</td></tr>
                                <tr><td>Gust (kmph)</td><td>-</td><td>&lt;1</td><td>&ge;1 - &lt;21</td><td>&ge;21 - &lt;41</td><td>&ge;41 - &lt;61</td><td>&ge;61 - &lt;81</td><td>&ge;81 - &lt;100</td><td>&ge;100</td></tr>
                                <tr><td>Wind Chill (°C)</td><td>&lt;1</td><td>&ge;1 - &lt;16</td><td>&ge;16 - &lt;25</td><td>&ge;25 - &lt;30</td><td>&ge;30 - &lt;34</td><td>&ge;34 - &lt;37</td><td>&ge;37 - &lt;40</td><td>&ge;40</td></tr>
                                <tr><td>Wind Direction</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                                <tr><td>Wind Degree (°)</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                                <tr><td>Wind speed (kmph)</td><td>-</td><td>&lt;1</td><td>&ge;1 - &lt;21</td><td>&ge;21 - &lt;41</td><td>&ge;41 - &lt;61</td><td>&ge;61 - &lt;81</td><td>&ge;81 - &lt;100</td><td>&ge;100</td></tr>
                                <tr><td>Total Snow (cm)</td><td>-</td><td>-</td><td>&gt;0 - &lt;2.5</td><td>&ge;2.5 - &lt;7.6</td><td>&ge;7.6 - &lt;20</td><td>&ge;20 - &lt;30</td><td>&ge;30 - &lt;40</td><td>&ge;50</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h2>
                        Air Quality Data (USA-EPA)
                    </h2>
                    <div className={styles.tableWrapper}>
                        <table className={`${styles.table} ${styles.airQualityColorTable}`}>
                            <thead>
                                <tr>
                                    <th className={styles.white}>Field</th>
                                    <th className="greenBg">Green <br /> [ good ]</th>
                                    <th className="greenyellowBg">GreenYellow <br /> [ acceptable ]</th>
                                    <th className="yellowBg">Yellow <br /> [ moderate ]</th>
                                    <th className="orangeBg">Orange <br /> [ high ]</th>
                                    <th className="pinkBg">Pink <br /> [ very high ]</th>
                                    <th className="redBg">Red <br /> [ extreme ]</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CO (µg/m³)</td>
                                    <td>&ge;0 - &lt;5038</td>
                                    <td>&ge;5038 - &lt;10744</td>
                                    <td>&ge;10744 - &lt;14192</td>
                                    <td>&ge;14192 - &lt;17641</td>
                                    <td>&ge;17641 - &lt;34680</td>
                                    <td>&ge;34680</td>
                                </tr>
                                <tr>
                                    <td>NO₂ (µg/m³)</td>
                                    <td>&ge;0 - &lt;101</td>
                                    <td>&ge;101 - &lt;201</td>
                                    <td>&ge;201 - &lt;751</td>
                                    <td>&ge;751 - &lt;1250</td>
                                    <td>&ge;1250 - &lt;2340</td>
                                    <td>&ge;2340</td>
                                </tr>
                                <tr>
                                    <td>O₃ (µg/m³)</td>
                                    <td>&ge;0 - &lt;101</td>
                                    <td>&ge;101 - &lt;161</td>
                                    <td>&ge;161 - &lt;216</td>
                                    <td>&ge;216 - &lt;266</td>
                                    <td>&ge;266 - &lt;800</td>
                                    <td>&ge;800</td>
                                </tr>
                                <tr>
                                    <td>SO₂ (µg/m³)</td>
                                    <td>&ge;0 - &lt;92</td>
                                    <td>&ge;92 - &lt;197</td>
                                    <td>&ge;197 - &lt;491</td>
                                    <td>&ge;491 - &lt;804</td>
                                    <td>&ge;804 - &lt;1592</td>
                                    <td>&ge;1592</td>
                                </tr>
                                <tr>
                                    <td>PM2.5 (µg/m³)</td>
                                    <td>&ge;0 - &lt;12.1</td>
                                    <td>&ge;12.1 - &lt;35.5</td>
                                    <td>&ge;35.5 - &lt;55.5</td>
                                    <td>&ge;55.5 - &lt;150.5</td>
                                    <td>&ge;150.5 - &lt;250.4</td>
                                    <td>&ge;250.4</td>
                                </tr>
                                <tr>
                                    <td>PM10 (µg/m³)</td>
                                    <td>&ge;0 - &lt;55</td>
                                    <td>&ge;55 - &lt;155</td>
                                    <td>&ge;155 - &lt;255</td>
                                    <td>&ge;255 - &lt;355</td>
                                    <td>&ge;355 - &lt;424</td>
                                    <td>&ge;424</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BlogContent
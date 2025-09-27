"use client"
import styles from "./WeatherContainer.module.css"
import CurrentDataBox from "./CurrentDataBox"
import HeadingBox from './HeadingBox'
import ForecastContainer from './ForecastContainer'
import AirQualityContainer from './AirQualityContainer'
import AstroContainer from './AstroContainer'
import AccordionItem from './AccordionItem'
import Loading from './Loading'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { clearError } from '@/redux/weatherSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

import dynamic from 'next/dynamic'
// import SearchBox from './SearchBox'
const SearchBox = dynamic(()=> import ('./SearchBox'), {
    ssr: false,
    loading: ()=> <p>Loading Search Bar...</p>
})


const WeatherContainer = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.weather.isLoading)
    const data = useSelector((state) => state.weather.data)
    const forecastSize = useSelector((state) => state.weather.forecastSize)
    const airQualityArraySize = useSelector((state) => state.weather.airQualityArraySize)

    // const isError = useSelector((state) => state.weather.isError)
    const errorMsg = useSelector((state) => state.weather.errorMsg)

    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    useEffect(() => {
        if (errorMsg) {
            toast.error(errorMsg, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: Bounce,
            });
            dispatch(clearError())
        }
    }, [errorMsg])


    return (
        <>
            <div className={styles.container}>
                <div className={styles.SearchBox}>
                    <SearchBox />
                </div>

                {isLoading && (
                    <div className={styles.loading}>
                        <Loading />
                    </div>
                )}

                {!isLoading && Object.keys(data).length !== 0 && (
                    <>
                        <div className={styles.Heading_CurrentDataBox}>
                            <HeadingBox location={data.location} />
                            <CurrentDataBox currentData={data.current} />
                        </div>
                        <div className={styles.ForecastContainer}>
                            <AccordionItem heading={`WEATHER FORECAST ${forecastSize} DAYS`}>
                                <ForecastContainer />
                            </AccordionItem>
                        </div>
                        <div className={styles.AirQualityContainer}>
                            <AccordionItem heading={`AIR QUALITY FORECAST ${airQualityArraySize} DAYS`}>
                                <AirQualityContainer />
                            </AccordionItem>
                        </div>
                        <div className={styles.AstroContainer}>
                            <AccordionItem heading={`ASTRONOMY FORECAST ${forecastSize} DAYS`}>
                                <AstroContainer />
                            </AccordionItem>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default WeatherContainer


"use client"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setRouteLoading } from '@/redux/routeSlice'

import dynamic from 'next/dynamic'
// import WeatherContainer from "@/components/WeatherContainer";
const WeatherContainer = dynamic(() => import("@/components/WeatherContainer"), {
    ssr: false,
    loading: () => <p style={{ textAlign: "center", color: "white" }}>Loading...</p>
})


const Current_and_forecast = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setRouteLoading(false))
    }, [dispatch])

    return (
        <>
            <WeatherContainer />
        </>
    )
}

export default Current_and_forecast
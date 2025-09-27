"use client"
import styles from "./SearchBox.module.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '@/redux/weatherSlice'
import { useSelector } from "react-redux"
import { clearData } from "@/redux/weatherSlice"
import { toast } from 'react-toastify';
import CountrySelector from "./CountrySelector"
// import CountrySelectorOld from "./CountrySelectorOld"
import Dropdown from "./Dropdown"
import SearchSvg from "./SearchSvg"
import { useRef } from "react"

let obj = {
    ml: "My Location",
    ctv: "City / Town / Village",
    ll: "Latitude, Longitude",
}

const toastOptions = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // theme: "colored",
};

const SearchBox = () => {
    const dispatch = useDispatch()
    const selectedCountry = useSelector((state) => state.weather.selectedCountry)
    const [selectedOption, setSelectedOption] = useState("ml")
    const isLoading = useSelector((state) => state.weather.isLoading)

    const [my_latitude_longitude, set_my_latitude_longitude] = useState({ my_latitude: null, my_longitude: null })
    const [city_town_village, set_city_town_village] = useState("")
    const [latitude_longitude, set_latitude_longitude] = useState({ latitude: "", longitude: "" })

    const searchButtonRef = useRef()

    const getLocation = async () => {
        if (!navigator.geolocation) {
            toast.error("Geolocation not supported", toastOptions);
            return;
        }

        const toastId = toast.loading("Getting location..."); // 🔄 pending state

        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    resolve,
                    reject,
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
                );
            });

            const lat = position.coords.latitude.toFixed(6);
            const lon = position.coords.longitude.toFixed(6);
            set_my_latitude_longitude({ my_latitude: lat, my_longitude: lon });

            // toast.success("Location fetched 📍")
            toast.update(toastId, {
                render: "Location fetched 📍",
                type: "success",
                isLoading: false,
                closeButton: true,
                ...toastOptions,
            });
        } catch (error) {
            console.log("Location: ",error);
            if (error.code === 1) {
                // toast.dismiss(toastId); 
                // toast.warn("Allow location access")

                toast.update(toastId, {
                    render: "Allow location access",
                    type: "warning",
                    isLoading: false,
                    closeButton: true,
                    ...toastOptions,
                });

                return;
            }

            toast.update(toastId, {
                render: "Failed to get location",
                type: "error",
                isLoading: false,
                closeButton: true,
                ...toastOptions,
            });
        }
    };


    const handleMyLatitudeLongitudeChange = (e) => {
        set_my_latitude_longitude({ ...my_latitude_longitude, [e.target.name]: e.target.value })
    }

    const handleLatitudeLongitudeChange = (e) => {
        set_latitude_longitude({ ...latitude_longitude, [e.target.name]: e.target.value })
    }

    const handleCityTownVillage = (e) => {
        set_city_town_village(e.target.value)
    }

    const handleSearch = () => {

        dispatch(clearData())

        if (selectedOption == "ml") {
            dispatch(fetchData({ selectedOption, my_latitude_longitude }))
        }
        else if (selectedOption == "ctv") {
            dispatch(fetchData({ selectedOption, city_town_village, selectedCountry }))
        }
        else if (selectedOption == "ll") {
            dispatch(fetchData({ selectedOption, latitude_longitude }))
        }
        // else if (selectedOption == "pia") {
        //     dispatch(fetchData({ selectedOption, public_ip }))
        // }
        else {
            //toast
            console.log("handleSearch error");
        }
    }

    const handler = (e) => {
        if (e.key === "Enter") {
            // console.log("hello");
            // handleSearch() 
            searchButtonRef.current?.click()
        }
    };

    useEffect(() => {
        // const btn = document.getElementById("eventSearchBtn");
        document.addEventListener("keydown", handler);

        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, []);


    // useEffect(() => {
    //     console.log("global", selectedOption);
    // }, [selectedOption])

    // useEffect(() => {
    //     console.log("my_latitude_longitude", my_latitude_longitude);
    // }, [my_latitude_longitude])

    // useEffect(() => {
    //     console.log("latitude_longitude", latitude_longitude);
    // }, [latitude_longitude])

    // useEffect(() => {
    //     console.log("city_town", city_town);
    // }, [city_town])

    return (
        <div className={`${styles.container} ${styles.container1}`}>
            <div className={styles.first}>
                {/* <span>Search By</span> */}
                <Dropdown options={obj} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>
            <div className={styles.second}>
                {selectedOption == "ml" && (
                    <div className={styles.searchContainer}>

                        {my_latitude_longitude.my_latitude !== null && my_latitude_longitude.my_longitude !== null && (

                            <div className={styles.searchContainerLatLong}>

                                <div className={styles.inputContainer}>
                                    <input type="search" name="my_latitude" placeholder='' className={`${styles.search} ${styles.searchLatLong}`} value={my_latitude_longitude.my_latitude} onChange={handleMyLatitudeLongitudeChange} />
                                    <label htmlFor="">my latitude</label>
                                </div>

                                <div className={styles.inputContainer}>
                                    <input type="search" name="my_longitude" placeholder='' className={`${styles.search} ${styles.searchLatLong}`} value={my_latitude_longitude.my_longitude} onChange={handleMyLatitudeLongitudeChange} />
                                    <label htmlFor="">my longitude</label>
                                </div>

                            </div>
                        )}

                        <div className={styles.buttonsContainer}>
                            <button className={styles.searchMyLocation} onClick={getLocation}>
                                {(my_latitude_longitude.my_latitude == null && my_latitude_longitude.my_longitude == null) ? "Get My Location" : "Refresh My Location"}
                            </button>

                            {(my_latitude_longitude.my_latitude && my_latitude_longitude.my_longitude) && <button className={styles.searchBtn} onClick={handleSearch} disabled={isLoading} ref={searchButtonRef}>
                                <span >Search</span>
                                <SearchSvg />
                            </button>}

                        </div>
                    </div>
                )}

                {selectedOption == "ctv" && (
                    <div className={styles.searchContainer}>
                        <div className={styles.inputContainer}>
                            <input type="search" name="city_town_village"
                                id="city_town_village"
                                placeholder=''
                                className={styles.search} value={city_town_village} onChange={handleCityTownVillage} autoFocus />
                            <label htmlFor="city_town_village">city / town / village</label>
                        </div>
                        <div className={styles.buttonsContainer}>
                            <CountrySelector /> 
                            {/* <CountrySelectorOld/> */}
                            <button className={styles.searchBtn} onClick={handleSearch} disabled={isLoading} ref={searchButtonRef}>
                                <span >Search</span>
                                <SearchSvg />
                            </button>
                        </div>
                    </div>
                )}

                {selectedOption == "ll" && (
                    <div className={styles.searchContainer}>
                        <div className={styles.searchContainerLatLong}>

                            <div className={styles.inputContainer}>
                                <input type="search" name="latitude" placeholder='' className={`${styles.search} ${styles.searchLatLong}`} value={latitude_longitude.latitude} onChange={handleLatitudeLongitudeChange} id="latitude" autoFocus />
                                <label htmlFor="latitude">latitude</label>
                            </div>

                            <div className={styles.inputContainer}>
                                <input type="search" name="longitude" placeholder='' className={`${styles.search} ${styles.searchLatLong}`} value={latitude_longitude.longitude} onChange={handleLatitudeLongitudeChange} id="longitude" />
                                <label htmlFor="longitude">longitude</label>
                            </div>

                        </div>
                        <button className={styles.searchBtn} onClick={handleSearch} disabled={isLoading} ref={searchButtonRef}>
                            <span >Search</span>
                            <SearchSvg />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchBox




    // const getLocation = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 set_my_latitude_longitude({
    //                     my_latitude: position.coords.latitude.toFixed(6),
    //                     my_longitude: position.coords.longitude.toFixed(6),
    //                 });
    //                 // console.log("Location Coordinates fetched.");     
    //                 toast.success("Device location accessed");
    //             },
    //             (error) => {
    //                 // console.log("error", error);
    //                 // alert("Error getting location: " + error.message);
    //                 if (error.code == 1) {
    //                     toast.warn("Allow location access to this site");
    //                 }
    //                 else {
    //                     toast.error("Location error");
    //                 }
    //             },
    //             { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    //         );
    //     } else {
    //         alert("Geolocation is not supported by this browser.");
    //     }
    // };



    // const getLocation = async () => {
    //     if (!navigator.geolocation) {
    //         toast.error("Geolocation not supported", toastOptions);
    //         return;
    //     }

    //     const geoPromise = new Promise((resolve, reject) => {
    //         navigator.geolocation.getCurrentPosition(
    //             resolve,
    //             reject,
    //             { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    //         );
    //     });

    //     try {
    //         const position = await toast.promise(
    //             geoPromise,
    //             {
    //                 pending: {
    //                     render: () => "Getting location...",
    //                     // ...toastOptions,
    //                 },
    //                 success: {
    //                     render: () => "Location fetched 📍",
    //                     // ...toastOptions,
    //                 },
    //                 error: {
    //                     render({ data }) {
    //                         if (data.code === 1) return "Allow location access";
    //                         return "Failed to get location";
    //                     },
    //                     // ...toastOptions,
    //                 },
    //             }
    //         );

    //         // ✅ Safe to set state here, after toast.promise resolves
    //         const lat = position.coords.latitude.toFixed(6);
    //         const lon = position.coords.longitude.toFixed(6);
    //         set_my_latitude_longitude({ my_latitude: lat, my_longitude: lon });

    //     } catch (err) {
    //         // Optional catch if needed
    //         // toast.error("Geolocation failed", err);
    //     }
    // };

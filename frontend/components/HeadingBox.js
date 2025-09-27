"use client"
import styles from "./HeadingBox.module.css"
import countries from "world-countries";
import { useState } from 'react';
import { useEffect } from 'react';


const countryAliases = {
    "united states of america": "united states",
    "usa united states of america": "united states",
    "cote d'ivoire": "ivory coast",
    "democratic republic of congo": "dr congo",
    "congo": "republic of the congo",
    "macedonia": "north macedonia",
    "congo": "republic of the congo",
    "nouvelle calédonie": "new caledonia",
    "pitcairn island": "pitcairn islands",
    "french polynesia islands": "french polynesia",
    "sao tomé-et-principe": "são tomé and príncipe",
    "virgin islands": "british virgin islands",
    "wallis and futuna islands": "wallis and futuna",
};


const HeadingBox = ({ location = {} }) => {
    // console.log("location", location);

    const {
        name,
        region,
        country,
        lat,
        lon,
    } = location

    const [countryCode, setCountryCode] = useState("")

    const getCountryCode = (input) => {

        let normalizedInput = input.toLowerCase().trim();

        if (countryAliases[normalizedInput]) {
            normalizedInput = countryAliases[normalizedInput];
        }

        let countryData = countries.find(
            (country) =>
                country.name.common.toLowerCase() === normalizedInput
        );
        return countryData?.cca2
        // return countryData
    };

    useEffect(() => {
        // console.log("countryCode", countryCode);
        setCountryCode(getCountryCode(country))
    }, [countryCode])


    return (
        <>
            {
                location && (
                    <div className={styles.container}>
                        <div className={styles.heading}>
                            <div className={styles.hitem}>
                                <div className={styles.left}>
                                    Lattitude:
                                </div>
                                <div className={styles.right}>
                                    {Number(lat).toFixed(6)}
                                </div>
                            </div>
                            <div className={styles.hitem}>
                                <div className={styles.left}>
                                    Longitude:
                                </div>
                                <div className={styles.right}>
                                    {Number(lon).toFixed(6)}
                                </div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.item}>
                                <div className={styles.left}>
                                    Location Name:
                                </div>
                                <div className={styles.right}>
                                    {name}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.left}>
                                    Region:
                                </div>
                                <div className={styles.right}>
                                    {region == "" ? "N/A" : region}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.left}>
                                    Country:
                                </div>
                                <div className={styles.right}>
                                    <span className={styles.country}>

                                        {countryCode && <img src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`} className={styles.flag} alt="" />}

                                        <div>
                                            {country}
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </>
    )
}

export default HeadingBox
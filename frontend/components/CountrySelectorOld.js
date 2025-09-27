"use client"
import { useEffect } from "react";
import Select from "react-select";
import countries from "world-countries";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedCountry } from "@/redux/weatherSlice";
import styles from "./CountrySelectorOld.module.css";


const countryOptions = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`, // Flag URL
}));

// console.log(countryOptions);

const CountrySelector = () => {

    const dispatch = useDispatch()
    const selectedCountry = useSelector((state) => state.weather.selectedCountry)
    // const [selectedCountry, setSelectedCountry] = useState("");

    // const handleChange = ()=>{
    //     setSelectedCountry()
    // }

    useEffect(() => {
        console.log(selectedCountry);
    }, [selectedCountry]);

    return (
        <div className={styles.container}>
            <Select
                className={styles.select}
                options={countryOptions}
                value={selectedCountry}
                // onChange={handleChange}
                onChange={(selectedOption) => dispatch(setSelectedCountry(selectedOption))}
                placeholder="Select a country..."
                isSearchable
                isClearable // Allows clearing via 'x' button inside Select
                filterOption={(option, inputValue) =>
                    option.data.label.toLowerCase().includes(inputValue.toLowerCase())
                }
                getOptionLabel={(e) => (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={e.flag}
                            alt=""
                            style={{ width: 20, height: 15, marginRight: 10 }}
                        />
                        {e.label}
                    </div>
                )}
                styles={{
                    input: (base) => ({
                      ...base,
                      color: "white",           
                    }),
                    control: (base) => ({
                      ...base,
                      backgroundColor: "var(--color-c1)", 
                      borderRadius: "1000px",
                      boxShadow: "none",
                      borderColor: "transparent",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: "white",           
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: "gray",            
                    }),
                    menu: (base) => ({
                      ...base,
                      // backgroundColor: "cadetblue", 
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? "var(--color-c1)" : "var(--color-c2)",
                      color: state.isSelected ? "cyan" : "white",
                    }),
                  }}
            />
        </div>
    );
};

export default CountrySelector;

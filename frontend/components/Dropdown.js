"use client"
import styles from "./Dropdown.module.css"
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'


const Dropdown = ({ options = {}, selectedOption, setSelectedOption }) => {

    const [dropDownShow, setdropDownShow] = useState(false)
    const downArrowrRef = useRef(null)
    const dropDownRef = useRef(null)

    const handleDropDown = (e) => {
        // console.log("clicked", dropDownShow);
        downArrowrRef.current?.classList.toggle(styles.iconUp)
        if (dropDownShow) {
            //disappear
            dropDownRef.current?.classList.remove(styles.appear)
            setTimeout(() => {
                setdropDownShow((v) => !v)
            }, 300);
        }
        else {
            setdropDownShow((v) => !v)
            setTimeout(() => {
                //appear
                dropDownRef.current?.classList.add(styles.appear)
            }, 0);
        }
    }

    const handleBlur = () => {
        // console.log("clicked 2", dropDownShow);
        downArrowrRef.current?.classList.remove(styles.iconUp)
        setTimeout(() => {
            //disappear
            dropDownRef.current?.classList.remove(styles.appear)
            setTimeout(() => {
                setdropDownShow(false)
            }, 300); 
        }, 100);
    }

    const handleOptionChange = (e) => {
        // console.log("clicked 3", dropDownShow);
        downArrowrRef.current?.classList.add(styles.iconUp)
        setSelectedOption(e.target.value)
    }

    // useEffect(() => {
    //   console.log("local", selectedOption);
    // }, [selectedOption])
    

    return (
        <div className={styles.selectWrapper} onClick={handleDropDown} onBlur={handleBlur}>
            <button className={styles.select} >{options[selectedOption]}</button>
            <img src="/icons/down-arrow-solid.svg" alt="" className={styles.downSvg} ref={downArrowrRef} />
            {dropDownShow && (<div className={styles.options} ref={dropDownRef}>
                {
                    Object.keys(options).map((value, index) => {
                        return (
                            <button className={styles.option} value={value} onClick={handleOptionChange} key={index}>{options[value]}</button>
                        )
                    })
                }
            </div>)}
        </div>
    )
}

export default Dropdown


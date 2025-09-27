"use client"
import { useState } from "react";
import { useRef } from "react";
import styles from "./Settings.module.css";
import SettingsSVG from './SettingsSVG'
import { useDispatch } from "react-redux";
import { clearData } from "@/redux/weatherSlice";
import { changeColorTheme } from "../redux/themesSlice";
import { useEffect } from "react";
import OverlayPortal from "./OverlayPortal";

const Settings = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isRendered, setIsRendered] = useState(false); // Controls actual DOM presence
    const [shouldAnimate, setShouldAnimate] = useState(false); // Controls animation timing
    const dispatch = useDispatch();


    const handleClick = () => {
        if (isMenuVisible) {
            // Start fade-out animation, then remove from DOM
            setShouldAnimate(false);
            setTimeout(() => setIsRendered(false), 300);
        } else {
            // First, add to the DOM
            setIsRendered(true);

            // Delay animation slightly so it fades in smoothly
            setTimeout(() => setShouldAnimate(true), 10);
        }
        setIsMenuVisible(!isMenuVisible);
    };

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains(styles.overlay)) {
            // setIsMenuVisible(true)
            handleClick()
        }
    };

    const handleCloseButton = (e) => {
        // setIsMenuVisible(true)
        handleClick()
    };

    const handleColorButtons = (e) => {
        const mode = e.target.name;
        dispatch(changeColorTheme(mode))
    };

    const handleClearData = () => {
        dispatch(clearData())
        handleCloseButton()
    }

    // useEffect(() => {
    //   console.log("isMenuVisible", isMenuVisible);
    //   console.log("isRendered", isRendered);
    //   console.log("shouldAnimate", shouldAnimate);
    // }, [isMenuVisible, isRendered, shouldAnimate])


    return (
        <div className={styles.container}>
            <button onClick={handleClick} className={styles.button} tabIndex={-1}>
                <div className={styles.icon}>
                    <SettingsSVG />
                </div>
            </button>
            {isRendered && (
                <OverlayPortal>
                    <div className={styles.overlay} onClick={handleOutsideClick}>
                        <div className={`${styles.box} ${shouldAnimate ? styles.show : styles.hide}`}>
                            <button className={styles.closeButton} onClick={handleCloseButton}>
                                <img src="/icons/close.svg" alt="" className={styles.closeSvg} />
                            </button>
                            <div>
                                <button onClick={handleClearData} className={styles.clearBtn}>
                                    <span>Clear Data</span>
                                    <img src="/icons/delete.svg" alt="" className={styles.deleteIcon} />
                                </button>
                            </div>
                            <div className={styles.colorThemeBox}>
                                <h3>Themes</h3>
                                <button onClick={handleColorButtons} name="blue" className={styles.blueTheme}>CADET BLUE</button>
                                <button onClick={handleColorButtons} name="green" className={styles.greenTheme}>MEDIUM SEA GREEN</button>
                                <button onClick={handleColorButtons} name="pink" className={styles.pinkTheme}>LIGHT CORAL</button>
                                <button onClick={handleColorButtons} name="violet" className={styles.violetTheme}>DARK MAGENTA</button>
                            </div>
                        </div>
                    </div>
                </OverlayPortal>
            )}
        </div>
    );
};

export default Settings;

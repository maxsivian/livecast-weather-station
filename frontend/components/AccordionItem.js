"use client"
import styles from "./AccordionItem.module.css"
import { useRef } from "react";


const AccordionItem = ({ heading, children }) => {

    const downArrowrRef = useRef(null)
    const contentRef = useRef(null)

    const toggleAccordion = (e) => {
        if (contentRef.current.style.maxHeight) {
            contentRef.current.style.maxHeight = null;
            downArrowrRef.current.classList.remove(styles.iconUp)
        } else {
            contentRef.current.style.maxHeight = (contentRef.current.scrollHeight + 5) + "px"; //variable
            downArrowrRef.current.classList.add(styles.iconUp)
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.accordionItem}>
                <div className={styles.accordionHeader} onClick={toggleAccordion}>
                    <div>
                        {heading}
                    </div>
                    <div>
                        <img src="/icons/down-arrow-solid.svg" alt="" className={styles.downArrow} ref={downArrowrRef}/>
                    </div>
                </div>
                <div className={styles.accordionContent} ref={contentRef} onDoubleClick={toggleAccordion}>
                    <div className={styles.show}>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AccordionItem
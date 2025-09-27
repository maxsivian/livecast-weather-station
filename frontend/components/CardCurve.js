"use client"
import React from 'react'

const CardCurve = ({flip=false}) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            // className={styles.svg}
            viewBox="0 0 350 253"
            preserveAspectRatio="xMidYMid meet"
            style={{height: "100%", transform: (flip)? "rotateY(180deg)":"none"}}

        >
            <g transform="translate(-160 ,-49 )">
                <path
                    d="M 50 50 
                     H 150  
                     C 250 50, 300 100, 350 200 
                     S 450 300, 500 300  
                     H 50
                     "
                    transform="translate(0,2)"
                    fill="var(--color2)"
                    stroke="none" />

                <path
                    d="M 50 50 
                     H 150 
                     C 250 50, 300 100, 350 200 
                     S 450 300, 500 300 
                     "
                    fill="none" stroke="var(--color3)" strokeWidth="4" />
            </g>
        </svg>
    )
}

export default CardCurve
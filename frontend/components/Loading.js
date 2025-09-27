"use client"
import { Grid } from "react-loader-spinner";
import styles from "./Loading.module.css";


const Loading = () => {
    
    return (
        <div className={styles.container}>
            <Grid
                visible={true}
                height="100%"
                width="100%"
                color="var(--color1)"
                ariaLabel="grid-loading"
                radius="12.5"
            />
        </div>
    );
};

export default Loading;

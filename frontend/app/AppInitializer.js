"use client"
import Navbar from "@/components/Navbar";
import LoadingBar from "@/components/LoadingBar";
import Background from "@/components/Background";
import ThemeApplier from "@/components/ThemeApplier";
import { ReduxProvider } from "./ProviderWrapper"
import { ToastContainer } from 'react-toastify';
import { useState } from "react";


const AppInitializer = ({ children }) => {

    const [themeReady, setThemeReady] = useState(false);

    return (
        <ReduxProvider>
            <ThemeApplier onReady={() => setThemeReady(true)} />
            {
                themeReady && (
                    <>
                        <LoadingBar />
                        <Background />
                        <Navbar />
                        {children}
                        <ToastContainer
                            position="bottom-left"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            closeButton
                        // transition={Bounce}
                        />
                    </>
                )
            }
        </ReduxProvider>
    )
}

export default AppInitializer
'use client';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const ThemeApplier = ({onReady}) => {
  
  const theme = useSelector((state) => state.themes.value);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.remove("blueMode", "greenMode", "pinkMode", "violetMode");
      document.body.classList.add(`${theme}Mode`);
    }
    if(onReady) onReady()
  }, [onReady, theme]);

  return null; // This doesn't render anything, just applies the theme
};

export default ThemeApplier;

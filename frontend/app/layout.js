import "./globals.css";
import AppInitializer from "./AppInitializer";

export const metadata = {
  title: "LIVECAST WEATHER STATION",
  description: "Get accurate current weather, 14-day forecast, sun & moon astronomy, and 5-day air quality. Auto location tracking included.",
  authors: [{ name: "maxsivian" }],
  keywords: ["weather", "air quality", "astronomy", "iot", "thingspeak"],
  robots: "index, follow",
  metadataBase: new URL("https://weather.maxsivian.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LIVECAST WEATHER STATION",
    description: "Get accurate current weather, 14-day forecast, sun & moon astronomy, and 5-day air quality. Auto location tracking included.",
    url: "https://weather.maxsivian.com/",
    type: "website",
    images: ["https://weather.maxsivian.com/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LIVECAST WEATHER STATION",
    description: "Get accurate current weather, 14-day forecast, sun & moon astronomy, and 5-day air quality. Auto location tracking included.",
    images: ["https://weather.maxsivian.com/logo.jpg"],
    site: "@maxsivian",
  },
};

export const viewport = {
  width: "device-width",     // sets width to device screen
  initialScale: 1,           // zoom level on load
  maximumScale: 1,           // max zoom allowed
  minimumScale: 1,           // min zoom allowed
  userScalable: false,       // disables zoom
  themeColor: "#000000",     // browser UI color
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppInitializer>
          {children}
        </AppInitializer>
      </body>
    </html>
  );
}

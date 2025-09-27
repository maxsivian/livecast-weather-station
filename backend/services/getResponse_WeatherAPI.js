export const getResponse_WeatherAPI = async (query, res) => {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${query}&days=14&aqi=yes&alerts=yes&hour=24`)
        // console.log("response", response);
        let data = await response.json()
        // console.log("data", data);

        if (data.error) {
            if (data.error.code === 1002) {
                return { status: 401, message: "API key not provided" }
                // return res.status(401).json({ message: "API key not provided." })
            }
            else if (data.error.code === 1003) {
                return { status: 400, message: "Parameter 'q' not provided." }
                // return res.status(400).json({ message: "Parameter 'q' not provided." })
            }
            else if (data.error.code === 1005) {
                return { status: 400, message: "API request url is invalid." }
                // return res.status(400).json({ message: "API request url is invalid." })
            }
            else if (data.error.code === 1006) {
                // return { status: 400, message: "No location found matching parameter 'q'" }
                return { status: 400, message: "No results found." }
                // return res.status(400).json({ message: "No location found matching parameter 'q'" })
            }
            else if (data.error.code === 2006) {
                return { status: 401, message: "API key provided is invalid" }
                // return res.status(401).json({ message: "API key provided is invalid" })
            }
            else if (data.error.code === 2007) {
                return { status: 403, message: "API key has exceeded calls per month quota." }
                // return res.status(403).json({ message: "API key has exceeded calls per month quota." })
            }
            else if (data.error.code === 2008) {
                return { status: 403, message: "API key has been disabled." }
                // return res.status(403).json({ message: "API key has been disabled." })
            }
            else if (data.error.code === 2009) {
                return { status: 403, message: "API key does not have access to the resource. Please check pricing page for what is allowed in your API subscription plan." }
                // return res.status(403).json({ message: "API key does not have access to the resource. Please check pricing page for what is allowed in your API subscription plan." })
            }
            else if (data.error.code === 9000) {
                return { status: 403, message: "Json body passed in bulk request is invalid. Please make sure it is valid json with utf-8 encoding." }
                // return res.status(403).json({ message: "Json body passed in bulk request is invalid. Please make sure it is valid json with utf-8 encoding." })
            }
            else if (data.error.code === 9001) {
                return { status: 400, message: "Json body contains too many locations for bulk request. Please keep it below 50 in a single request." }
                // return res.status(400).json({ message: "Json body contains too many locations for bulk request. Please keep it below 50 in a single request." })
            }
            else if (data.error.code === 9999) {
                return { status: 400, message: "Internal application error." }
                // return res.status(400).json({ message: "Internal application error." })
            }
            else {
                return { status: 400, message: "Random Error" }
                // return res.status(400).json({ message: "Random Error" })
            }
        }
        return { status: 200, message: "Download Successfull", data }
        // return res.json(data)
    } catch (error) {
        console.log("DEV: (sendResponse):");
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
        console.log(error.code);
        return res.status(500).json({ message: `SERVER ERROR (CODE: 3): ${error.name} ${error.message}` })
    }
}

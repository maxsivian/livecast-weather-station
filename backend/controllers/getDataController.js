import { getQuery } from "../services/getQuery.js";
import { getResponse_WeatherAPI } from "../services/getResponse_WeatherAPI.js"

export const getDataController = async (req, res) => {
    try {
        // console.log("Request received from ip: ", req.ip);

        let body = req.body
        // console.log("body", body);
        const { option } = body
        // console.log("option", option);

        let { query, error, status: mystatus, message: mymessage } = getQuery(body, option)
        if (error) {
            return res.status(mystatus).json({ message: mymessage })
        }

        let { status, message, data } = await getResponse_WeatherAPI(query, res)

        res.status(status).json({ message, data })
        // console.log("Response sent to ip: ", req.ip);
        // console.log("\n");
        
        // res.sendFile(path.join(__dirname, "data.json"))
        // res.send('Hello World!')
    } catch (error) {
        return res.status(500).json({ message: `SERVER ERROR (CODE: 1): ${error.name} ${error.message}` })
    }
}
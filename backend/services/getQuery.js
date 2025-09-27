export const getQuery = (body, option) => {
    try {
        let query = ""
        switch (option) {
            case "ml": {
                // console.log(body.my_latitude_longitude);
                if (body.my_latitude_longitude.my_latitude.trim() && body.my_latitude_longitude.my_longitude.trim()) {
                    query = body.my_latitude_longitude.my_latitude.trim() + "," + body.my_latitude_longitude.my_longitude.trim()
                }
                else {
                    return { status: 400, error: true, message: "Empty Coordinate(s) !" }
                    // return res.status(400).json({ success: false, error: true, message: "Empty Coordinate(s)" })
                }
                // query = body.my_latitude_longitude.my_latitude + "," + body.my_latitude_longitude.my_longitude
                break;
            }
            case "ctv": {
                // console.log(body.city_town);
                // console.log(body.selectedCountry?.value);
                let selectedC = "";
                if (body.city_town_village.trim()) {
                    // console.log("test 1");
                    let cityTownVillage = encodeURIComponent(body.city_town_village.trim())
                    if (body.selectedCountry?.value) {
                        selectedC = body.selectedCountry?.value
                        query = cityTownVillage + "," + selectedC
                        break;
                    }
                    else {
                        query = cityTownVillage
                        break;
                    }
                }
                else {
                    return { status: 400, error: true, message: "Empty city / town / village !" }
                    // return res.status(400).json({ success: false, error: true, message: "Empty city" })
                }
                break;
            }

            case "ll": {
                // console.log(body.latitude_longitude);
                if (body.latitude_longitude.latitude.trim() && body.latitude_longitude.longitude.trim()) {
                    query = body.latitude_longitude.latitude.trim() + "," + body.latitude_longitude.longitude.trim()
                }
                else {
                    return { status: 400, error: true, message: "Empty Coordinate(s) !" }
                    // return res.status(400).json({ success: false, error: true, message: "Empty Coordinate(s)" })
                }
                break;
            }

            default: {
                return { status: 400, error: true, message: "Missing search option !" }
            }
        }

        // console.log("query: ", query);
        return { query, error: false };
    } catch (error) {
        return res.status(500).json({ message: `SERVER ERROR (CODE: 2): ${error.name} ${error.message}` })
    }
}

import axios from "axios";

const apikey = "48d05491d6ad8b5afb5611937fb790aa";
const baseURL=`api.openweathermap.org/data/2.5/forecast?q=Gdańsk&appid=${apikey}`
const api = axios.create({ baseURL })
let sunrise
let sunset;

export async function fetchData(city) {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`
        );
        // console.log(response.data)

        // sunrise = response.data.city.sunrise;
        // sunset = response.data.city.sunset;
        // console.log(new Date(sunrise * 1000).toLocaleTimeString())
        // console.log(new Date(sunset * 1000).toLocaleTimeString())
        return response
    }
    catch (error) {
        console.log(error)
    }
    
}

import { useState } from "react"
import WeatherForm from "./WeatherForm"

const WeatherApp = () => {
    const [weather, setWeather] = useState(null)

    async function loadInfo(city = "quito"){        
        try{
            const request = await fetch(`
                ${process.env.REACT_APP_URL}
                &key=${process.env.REACT_APP_KEY}
                &q=${city}
                `)
            const json = await request.json()
            console.log(json)
            setWeather(json)
        }catch(error){
            console.log("Error:"+error)
        }

    }

    function handleChangeCity(city){
        setWeather(null)
        loadInfo()
    }
    return(
        <div>
            <WeatherForm onChangeCity={handleChangeCity}/>          
            <div>
                {weather?.current.temp_c}
            </div>
        </div>

    )
}
export default WeatherApp
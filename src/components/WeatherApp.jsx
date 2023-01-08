import { useEffect, useState } from "react"
import WeatherForm from "./WeatherForm"
import WeatherInfo from "./WeatherInfo"

const WeatherApp = () => {
    const [weather, setWeather] = useState(null)

    useEffect(()=>{        
        loadInfo()
    }, [])

    useEffect(()=> {
        document.title = `Weather - ${weather?.location.name ?? ""}`
    },[weather])

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
        loadInfo(city)
    }

    return(
        <div>
            <WeatherForm onChangeCity={handleChangeCity}/>          
            <WeatherInfo weather={weather}/>

        </div>
    )
}
export default WeatherApp
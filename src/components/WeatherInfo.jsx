import styles from "./weatherInfo.module.css"
const WeatherInfo = ({weather})=>{    
    console.log(weather)
    return(
        <div className={styles.mainInfo}>
            <div className={styles.city}>
                {weather?.location.name}
            </div>
            <div className={styles.country}> 
                {weather?.location.country}
            </div>
            <div className={styles.row}>
                <div className={styles.weatherConditions}>
                    <img
                        src={`http:${weather?.current.condition.icon}`}
                        width="96"
                        alt={weather?.current.condition.text}
                    />                    
                </div>
                <div className={styles.condition}>{weather?.current.condition.text}</div>
                <div>                    
                    <div className={styles.current}>{weather?.current.temp_c}°</div>                                                          
                </div>
            </div>
            <iframe
                title="map"
                src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d237560.0897376865!2d${weather?.location.lon}!3d${weather?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1673129544522!5m2!1ses!2sec`}
                width="100%"
                height="400"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}
export default WeatherInfo
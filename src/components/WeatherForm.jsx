import { useState } from "react"
import styles from "./weatherForm.module.css"

const WeatherForm = ({onChangeCity}) =>{
    const [city, setCity] = useState("")
    function onChange(e){
        const value = e.target.value
        if(value !== ""){
            setCity(value)
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        onChangeCity(city)
    }

    function validar(e) {        
        let regex = new RegExp("^[a-zA-Z ]+$");
        if (!regex.test(e.key)) {
            e.preventDefault()
        }
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <input onKeyDown={validar} className={styles.input} type="text" onChange={onChange} placeholder="Your Awesome City Here!"/>
        </form>
    )
}
export default WeatherForm
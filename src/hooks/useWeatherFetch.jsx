import { useState } from "react"


export const useWeatherFetch = (API_KEY, urlBase) => {

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const fetchClima = async () => {
        //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.error('Error: ' + error)
        }

    }

    const handlerCambioCiudad = (event) => {
        setCiudad(event.target.value)
    }

  return {
    ciudad,
    dataClima,
    fetchClima,
    handlerCambioCiudad
  }
}

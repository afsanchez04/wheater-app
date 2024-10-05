import React, { useEffect, useState } from 'react'
import { useWeatherFetch } from './hooks/useWeatherFetch'
import { formatTemperature, getIconWeather } from './helpers/weatherHelpers'

export const WheatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '27412c6adde02608ce86760095330e8a'
    

    const {ciudad, dataClima, fetchClima, handlerCambioCiudad} = useWeatherFetch(API_KEY, urlBase)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) fetchClima()
        console.log('Buscando...')
    }



    return (
        <div className="container">

            <h1>Aplicación del clima</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ciudad}
                    onChange={handlerCambioCiudad}
                    placeholder='Buscar ciudad...'
                />
                <button className="d-none d-md-block" type="submit">Buscar</button>
            </form>

            {
                dataClima && (
                    <div>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura { formatTemperature(dataClima?.main?.temp) }°C</p>
                        <p>Condición meteorológica: {dataClima.weather[0].description}</p>
                        <img src={ getIconWeather(dataClima.weather[0].icon) } alt="" />
                    </div>
                )
            }

        </div>
    )
}


export const formatTemperature = (kelvinTemp) => {
    const difKelvin = 273.15
    return parseInt(kelvinTemp-difKelvin)
}

export const getIconWeather = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
}
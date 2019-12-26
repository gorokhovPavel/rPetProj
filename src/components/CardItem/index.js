import React from 'react'
import { connect } from 'react-redux'
import { setFilterCities } from '../../store/actions'
import './style.css'

function CardItem({ cityWeather, setFilterCities }) {
  if (!cityWeather) return null

  const cityName = cityWeather.name
  const degreeText = degree => `${degree > 0 ? '+' : ''}${degree}°C`
  const imgFile = pngName => require(`../../media/images/${pngName}.png`)
  const windText = wind => `Ветер : ${wind} м/с`
  const pressureText = pres => `Давление : ${pres} мм`

  return (
    <div className="sizeCardItem colorCardItem borderBox">
      <div>
        <p className="inlineBox cityName">{cityName}</p>
        <img
          className="inlineBox rightBox closeImg point"
          src={imgFile('close')}
          onClick={() => setFilterCities(cityWeather, true)}
          alt="close"
        />
      </div>
      <div className="mainWeather">
        <img
          className="inlineBox weatherImg"
          src={imgFile(cityWeather.typeWeather)}
          alt={cityName}
        />
        <p className="inlineBox degreeText">{degreeText(cityWeather.degree)}</p>
      </div>
      <div className="addWeather">
        <p>{windText(cityWeather.wind)}</p>
        <p>{pressureText(cityWeather.pressure)}</p>
      </div>
    </div>
  )
}

export default connect(
  (state, ownProps) => ({
    cityWeather: ownProps.cityWeather,
  }),
  {
    setFilterCities,
  }
)(CardItem)

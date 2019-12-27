import React from 'react'
import CardItem from '../CardItem/index'
import { arrayOf, object } from 'prop-types'
import './style.css'

function CardList({ cityList }) {
  const CardArr = cityList.map((item, index) => (
    <CardItem key={index} cityWeather={item}></CardItem>
  ))

  return <div className="flexContainer cardList">{CardArr}</div>
}

CardList.propTypes = {
  cityList: arrayOf(object),
}

export default CardList

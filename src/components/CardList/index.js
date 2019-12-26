import React, { useEffect } from 'react'

import { Spin } from 'antd'
import { connect } from 'react-redux'
import { filtratedCitiesSelector, citiesLoading } from '../../store/selectors'
import { loadAllCities } from '../../store/actions'

import CardItem from '../CardItem/index'
import './style.css'

function CardList({
  cities,
  loading,
  loadAllCities
}) {

  useEffect( ()=> {
    loadAllCities();
  }, [loadAllCities]);
  
  const Spinner = ( loading && <Spin /> );
  const CardArr = cities.map( ( item, index )=>
    <CardItem key={index} cityWeather={item} ></CardItem>
  );

  return (
    <div className='containerCard' >
      {Spinner}
      {CardArr}
    </div>
  )
}

export default connect(
  state=>({
    cities : filtratedCitiesSelector(state),
    loading : citiesLoading(state)
  }),
  {
    loadAllCities
  }
)(CardList);
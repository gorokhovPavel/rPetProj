import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bool, func, arrayOf, object } from 'prop-types'

import { citiesLoading, filtratedCitiesSelector } from '../../store/selectors'
import { loadAllCities } from '../../store/actions'

import CardList from '../CardList/index'
import AddCard from '../AddCard/index'
import Filter from '../Filter/index'
import { Spin } from 'antd'

import './style.css'

function Content({ cities, loading, loadAllCities }) {
  useEffect(() => {
    loadAllCities()
  }, [loadAllCities])

  const FinalForm = loading ? (
    <Spin className="spinPosition" />
  ) : (
    <>
      <div className="flexContainer">
        <div className="item">
          <AddCard />
        </div>
        <div className="item">
          <Filter />
        </div>
      </div>
      <CardList cityList={cities} />
    </>
  )

  return <>{FinalForm}</>
}

Content.propTypes = {
  cities: arrayOf(object),
  loading: bool,
  loadAllCities: func,
}

export default connect(
  state => ({
    cities: filtratedCitiesSelector(state),
    loading: citiesLoading(state),
  }),
  {
    loadAllCities,
  }
)(Content)

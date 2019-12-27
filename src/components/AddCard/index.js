import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AutoComplete, Button } from 'antd'
import { allCitiesSelector } from '../../store/selectors'
import { setFilterCities } from '../../store/actions'
import { arrayOf, object, func } from 'prop-types'

import './style.css'

function AddForm({ allCities, setFilterCities }) {
  const [selectedCiti, setSelectCity] = useState('')
  const allNamesOfCities =
    allCities.length > 0 ? allCities.map(item => item.name) : []
  const setClick = () => {
    const foundCity = allCities.find(item => item.name === selectedCiti)
    setFilterCities(foundCity, false)
  }
  return (
    <div className="flexContainer addCard">
      <AutoComplete
        className="search"
        onSelect={setSelectCity}
        onChange={setSelectCity}
        dataSource={allNamesOfCities}
      />
      <Button className="" disabled={!selectedCiti} onClick={setClick}>
        +
      </Button>
    </div>
  )
}

AddForm.propTypes = {
  allCities: arrayOf(object),
  setFilterCities: func,
}

export default connect(
  state => ({
    allCities: allCitiesSelector(state),
  }),
  {
    setFilterCities,
  }
)(AddForm)

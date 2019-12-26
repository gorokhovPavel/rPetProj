import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AutoComplete, Button } from 'antd'
import { allCitiesSelector, citiesLoading } from '../../store/selectors'
import { setFilterCities } from '../../store/actions'

function AddForm({ allCities, loading, setFilterCities }) {
  const [selectedCiti, setSelectCity] = useState('')
  const allNamesOfCities =
    allCities.length > 0 ? allCities.map(item => item.name) : []
  const setClick = () => {
    const foundCity = allCities.find(item => item.name === selectedCiti)
    setFilterCities(foundCity)
  }
  const finalForm = !loading && (
    <div className="inlineBox">
      <AutoComplete
        onSelect={setSelectCity}
        onChange={setSelectCity}
        dataSource={allNamesOfCities}
      />
      <Button disabled={!selectedCiti} onClick={setClick}>
        +
      </Button>
    </div>
  )
  return <>{finalForm}</>
}
export default connect(
  state => ({
    allCities: allCitiesSelector(state),
    loading: citiesLoading(state),
  }),
  {
    setFilterCities,
  }
)(AddForm)

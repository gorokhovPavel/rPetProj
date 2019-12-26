import React from 'react'
import { connect } from 'react-redux'
import { AutoComplete } from 'antd'
import { allCitiesSelector, citiesLoading } from '../../store/selectors'

function AddForm({ allCities, loading }) {
  const allNamesOfCities =
    allCities.length > 0 ? allCities.map(item => item.name) : []
  const InputLoading = !loading && (
    <AutoComplete dataSource={allNamesOfCities} />
  )
  return <div className="inlineBox">{InputLoading}+</div>
}
export default connect(state => ({
  allCities: allCitiesSelector(state),
  loading: citiesLoading(state),
}))(AddForm)

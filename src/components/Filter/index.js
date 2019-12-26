import React from 'react'
import { connect } from 'react-redux'
import { setFilterDegree } from '../../store/actions'

import { Slider } from 'antd'
import './style.css'

function Filter({ filter, setFilterDegree }) {
  const minDegree = -20
  const maxDegree = 20
  //const sliderSettings = { reverse : true };

  return (
    <div className="slidecontainer">
      <Slider
        min={minDegree}
        max={maxDegree}
        defaultValue={filter}
        onChange={setFilterDegree}
      />
      <p>{filter}</p>
    </div>
  )
}

export default connect(
  state => ({
    filter: state.filters.degreeFilter,
  }),
  { setFilterDegree }
)(Filter)

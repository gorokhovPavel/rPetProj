import React from 'react'
import { connect } from 'react-redux'
import { setFilterDegree } from '../../store/actions'
import { number } from 'prop-types'

import { Slider } from 'antd'
import './style.css'

function Filter({ filter, setFilterDegree }) {
  const minDegree = -20
  const maxDegree = 20
  const textFilter = 'Где сейчас теплее, чем'
  const setTooltipText = value => `${value > 0 ? '+' : ''}${value}°C`

  return (
    <div className="filterContainer">
      <p className="centerText">{textFilter}</p>
      <Slider
        tipFormatter={setTooltipText}
        className="slider"
        min={minDegree}
        max={maxDegree}
        defaultValue={filter}
        onChange={setFilterDegree}
      />
    </div>
  )
}

Filter.propTypes = {
  filter: number,
}

export default connect(
  state => ({
    filter: state.filters.degreeFilter,
  }),
  { setFilterDegree }
)(Filter)

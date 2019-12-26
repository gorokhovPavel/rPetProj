import React from 'react'
import { connect } from 'react-redux'
import { setFilterDegree } from '../../store/actions'

import { Slider } from 'antd'
import './style.css'

function Filter({ filter, setFilterDegree }) {
    
    const minDegree = -20;
    const maxDegree = 20;
    const sliderSettings = { reverse : false };
    return(
        <div className='slidecontainer' >
            <Slider reverse={sliderSettings} min={minDegree} max={maxDegree} defaultValue={filter} onChange={setFilterDegree} />
            {/* <input type='range' min={minDegree} max={maxDegree} defaultValue={0} onChange={e=>setSlider(e.target.value)} className='slider' /> */}
            <p>{filter}</p>
        </div>
    )
}

export default connect(
    state=>({
        filter : state.filters.degreeFilter
    }),
    { setFilterDegree }
)(Filter);
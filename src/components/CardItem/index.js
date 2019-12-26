import React from 'react'
import './style.css'

function CardItem( {cityWeather} ) {
    
    if( !cityWeather ) return null;

    const cityName = cityWeather.name;
    const degreeText = degree=> `${degree > 0 ? '+' : ''}${degree}°C`;
    const imgFile = pngName=> require(`../../media/images/${pngName}.png`);
    const windText = wind=> `Ветер : ${wind} м/с`;
    const pressureText = pres=> `Давление : ${pres} мм`;

    return (
        <div className='sizeCardItem colorCardItem borderBox' >
            <div>
                <p className='inlineBox cityName' >{cityName}</p>
                <img className='inlineBox rightBox closeImg point' src={imgFile('close')} alt='close' />
            </div>
            <div className='mainWeather' >
                <img className='inlineBox weatherImg' src={imgFile(cityWeather.typeWeather)} alt={cityName} />
                <p className='inlineBox degreeText' >{degreeText(cityWeather.degree)}</p>
            </div>
            <div className='addWeather'>
                <p>{windText(cityWeather.wind)}</p>
                <p>{pressureText(cityWeather.pressure)}</p>
            </div>
        </div>
    )
}

export default CardItem;
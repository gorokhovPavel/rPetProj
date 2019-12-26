import React from 'react'

import CardList from '../CardList/index'
import AddCard from '../AddCard/index'
import Filter from '../Filter/index'

function Content() {
    return (
        <>
            <AddCard />
            <Filter />
            <CardList />
        </>
    )
}

export default Content;
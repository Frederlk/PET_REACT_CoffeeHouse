import React, { useMemo, useState } from 'react'

import { data } from '../constants'
import Card from './Card'

const Catalog = ({ filters }) => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [search, setSearch] = useState('')
    const items = data.coffee

    const filteredItems = useMemo(() => {
        if (activeFilter === 'all') {
            return items;
        } else {
            return items.filter(item => item.country === activeFilter);
        }
    }, [items, activeFilter])

    const searchedItems = filteredItems.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    const elements = searchedItems.map((item, i) => (
        <Card
            dataItem={item}
            classnames='catalog__card'
            key={item.title + i}
        />
    ));

    const filtersBlock = (
        <div className="catalog__top">
            <div className="catalog__search">
                <div className="catalog__label">Lookiing for</div>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    autoComplete="off"
                    type="text" name="search"
                    data-error="Error"
                    placeholder="start typing here..."
                    className="catalog__input" />
            </div>
            <div className="catalog__filter">
                <div className="catalog__label">Or filter</div>
                <div className="catalog__buttons">
                    <button type="button" onClick={() => setActiveFilter('all')} className="catalog__button">All</button>
                    <button type="button" onClick={() => setActiveFilter('Brazil')} className="catalog__button">Brazil</button>
                    <button type="button" onClick={() => setActiveFilter('Kenya')} className="catalog__button">Kenya</button>
                    <button type="button" onClick={() => setActiveFilter('Columbia')} className="catalog__button">Columbia</button>
                </div>
            </div>
        </div>
    )

    return (
        <div className="catalog">
            <div className="catalog__container">
                {filters ? filtersBlock : null}
                <div className="catalog__body">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default Catalog
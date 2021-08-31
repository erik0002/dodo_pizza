import React from 'react'
import {Categories, PizzaBlock, SortPopUp} from "../components";

const Main = ({items}) => {
    console.log(items)
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={(item) => console.log(item)}
                    items={[
                        'Мясные',
                        'Вегетарианские',
                        'Острые',
                        'Гриль',
                        'Закрытые'
                    ]}
                />
                <SortPopUp items={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
                }
            </div>
        </div>
    )
}

export default Main

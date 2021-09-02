import React from 'react'
import {Categories, PizzaBlock, SortPopUp} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import PizzaHolderBlock from "../components/PizzaBlock/PizzaLoadingBlock";

const CategoriesNames = ['Мясные', 'Вегетарианские', 'Острые', 'Гриль', 'Закрытые'];
const SortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
];

const Main = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const { category, sortBy} = useSelector(({filters}) => filters);

    React.useEffect(() => {
        dispatch(fetchPizzas());
    }, [category]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={CategoriesNames}
                />
                <SortPopUp items={SortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoaded
                    ? items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
                    : Array(10)
                        .fill(0)
                        .map((_, index) => (<PizzaHolderBlock key={index}/>))}
            </div>
        </div>
    )
}

export default Main

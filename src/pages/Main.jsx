import React from 'react'
import {Categories, PizzaBlock, SortPopUp} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import { addPizzaToBasket} from "../redux/actions/basket";
import PizzaHolderBlock from "../components/PizzaBlock/PizzaLoadingBlock";

const CategoriesNames = ['Мясные', 'Вегетарианские', 'Острые', 'Гриль', 'Закрытые'];
const SortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
];

const Main = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const basketItems = useSelector(({basket}) => basket.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const { category, sortBy} = useSelector(({filters}) => filters);

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((obj) => {
        dispatch(setSortBy(obj));
    }, []);

    const handleAddPizzaToBasket = (obj) => {
        dispatch(addPizzaToBasket(obj));
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={CategoriesNames}
                />
                <SortPopUp
                    onClickSortType={onSelectSortType}
                    activeSortType={sortBy.type}
                    items={SortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoaded
                    ? items.map((obj) => <PizzaBlock
                        onClickAddPizza={handleAddPizzaToBasket}
                        key={obj.id}
                        addedBasket={basketItems[obj.id] && basketItems[obj.id].items.length}
                        {...obj}/>)
                    : Array(10)
                        .fill(0)
                        .map((_, index) => (<PizzaHolderBlock key={index}/>))}
            </div>
        </div>
    )
}

export default Main

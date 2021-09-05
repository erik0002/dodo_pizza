
export const addPizzaToBasket = (pizzaObj) => ({
    type: 'ADD_PIZZA_BASKET',
    payload: pizzaObj,
});

export const clearBasket = () => ({
    type: 'CLEAR_BASKET'
})

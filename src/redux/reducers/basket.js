

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

// id = 0;
//
// state = {
//     items: {
//         0: [
//             {1},
//             {2},
//             {3},
//             {new}
//         ],
//         2: [
//             {new}
//         ]
//     },
//     totalPrice: 0,
//     totalCount: 0
// }

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_BASKET':
            const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id] : {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };

            const items = Object.values(newItems).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPizzasPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPizzasPrice
            };
        case 'CLEAR_BASKET':
            return {items: {}, totalPrice: 0, totalCount: 0}
        default:
            return state;
    }
}

export default basket;

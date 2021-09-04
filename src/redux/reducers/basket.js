

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


const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_BASKET':
            const newItems = {
                ...state.items,
                [action.payload.id] : !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            };

            const allPizzas = [].concat.apply([], Object.values(newItems));
            const totalPizzasPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPizzasPrice
            };
        default:
            return state;
    }
}

export default basket;

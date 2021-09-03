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
            return {
                ...state,
                items: {
                    ...state.items,
                   [action.payload.id] : !state.items[action.payload.id]
                       ? [action.payload]
                       : [...state.items[action.payload.id], action.payload]
                }
            };
        default:
            return state;
    }
}

export default basket;

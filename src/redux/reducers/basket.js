

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

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
}

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path)
        return sum + value;
    }, 0);
}

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
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            };

        case 'REMOVE_BASKET_ITEM':
            const newItem = {
                ...state.items,
            }
            const currentTotalPrice = newItem[action.payload].totalPrice;
            const currentTotalCount = newItem[action.payload].items.length;
            delete newItem[action.payload];

            return {
                ...state,
                items: newItem,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }

        case 'PLUS_BASKET_ITEM': {
            const newObjItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                }
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            };
        }

        case 'MINUS_BASKET_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;
            const newItems = {
                    ...state.items,
                    [action.payload]: {
                        items: newObjItems,
                        totalPrice: getTotalPrice(newObjItems),
                    }
                };
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        case 'CLEAR_BASKET':
            return {items: {}, totalPrice: 0, totalCount: 0}
        default:
            return state;
    }
}

export default basket;

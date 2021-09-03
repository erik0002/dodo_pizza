//Action Creator
export const setSortBy = ({type, order}) => ({
    type: 'SET_SORT_BY',
    payload: {type, order}
});

//action
// const setSortByY = ({
//     type: 'SET_SORT_BY',
//     payload: name
// });

export const setCategory = (setIndex) => ({
    type: 'SET_CATEGORY',
    payload: setIndex
});

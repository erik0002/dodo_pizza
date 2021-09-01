//Action Creator
export const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name
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

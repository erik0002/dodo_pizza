import React from "react";
import PropTypes from "prop-types";

// class Categories extends React.Component {
//
//     state = {
//         activeItem: 3
//     }
//
//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         })
//     }
//
//     render () {
//         const {items, onClickItem} = this.props;
//         const categories = items.map((item, i) => <li
//             className={this.state.activeItem === i ? 'active' : ''}
//             onClick={() => this.onSelectItem(i)}
//             key={`${item}_${i}`}>{item} </li>)
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {categories}
//                 </ul>
//             </div>
//         )
//     }
// }
//
// export default Categories;

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {

    const categories = items && items.map((item, i) => (
        <li
            className={activeCategory === i ? 'active' : ''}
            onClick={() => onClickCategory(i)}
            key={`${item}_${i}`}>{item}
        </li>
    ))

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>
                    Все
                </li>
                    {categories}
            </ul>
        </div>
    )
}
)

Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickCategory: PropTypes.func
};

Categories.defaultProps = {
    activeCategory: null,
    items: []
};

export default Categories;

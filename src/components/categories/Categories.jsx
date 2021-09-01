import React from "react";

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

const Categories = React.memo(function Categories({items, onClickItem}) {

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
        onClickItem(index);
    }

    const categories = items && items.map((item, i) => (
        <li
            className={activeItem === i ? 'active' : ''}
            onClick={() => onSelectItem(i)}
            key={`${item}_${i}`}>{item}
        </li>
    ))

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>
                    Все
                </li>
                    {categories}
            </ul>
        </div>
    )
}
)

export default Categories;

import React from 'react';
import emptyCart from '../asserts/img/empty-cart.png';
import {Link} from "react-router-dom";

const EmptyBasket = () => {
    return (
        <div className="container container--cart">
            <div className="cart cart--empty">
                <h2>Корзина пустая <i>😕</i></h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.<br/>
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={emptyCart} alt="Empty cart"/>
                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default EmptyBasket

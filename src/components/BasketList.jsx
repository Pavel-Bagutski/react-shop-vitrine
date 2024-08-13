import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li class="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.mainId}
                        removeFromBasket={removeFromBasket}
                        decQuantity={decQuantity}
                        incQuantity={incQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li class="collection-item">Корзина пуста</li>
            )}
            <li class="collection-item active">
                Общая стоимость: {totalPrice} руб
            </li>
            <li className="collection-item ">
                <button className="btn btn-small">Оформить</button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };

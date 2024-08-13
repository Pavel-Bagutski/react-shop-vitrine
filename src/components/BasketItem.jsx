function BasketItem(props) {
    const {
        id,
        displayName,
        quantity,
        price,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;

    const finalPrice = price.finalPrice;
    return (
        <li className="collection-item">
            {displayName}
            {"   "}
            <i
                className="material-icons basket-quantity"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>
            {"   "}x{quantity}
            {"   "}
            <i
                b
                className="material-icons basket-quantity"
                onClick={() => incQuantity(id)}
            >
                add
            </i>
            {"   "}= {finalPrice * quantity} руб.
            {"  "}
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}
export { BasketItem };

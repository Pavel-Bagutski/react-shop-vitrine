function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className="cart white ">
            <i
                className="material-icons"
                style={{ fontSize: "3rem" }}
                onClick={handleBasketShow}
            >
                shopping_cart
            </i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}
export { Cart };

function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets,
        displayType,
        rarity,
        price,
        firstReleaseDate,
        addToBasket = Function.prototype,
    } = props;

    const id = mainId;

    const finalPrice = price.finalPrice;

    const rarityFinal = rarity.name;

    const full_background =
        displayAssets && displayAssets.length > 0
            ? displayAssets[0].background
            : "";

    return (
        <div
            className="card"
            style={{
                width: "350px",
                height: "550px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "10px",
            }}
        >
            <div
                className="card-image"
                style={{ height: "400px" }}
            >
                <img
                    src={full_background}
                    alt={displayName}
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div
                className="card-content"
                style={{ padding: "10px" }}
            >
                <span
                    className="card-title"
                    style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                    {displayName}
                </span>
                <p style={{ fontSize: "0.9rem", color: "#757575" }}>
                    {displayDescription}
                </p>
            </div>
            <div
                className="card-action"
                style={{ padding: "10px", textAlign: "left" }}
            >
                <button
                    className="btn"
                    style={{ marginRight: "10px" }}
                    onClick={() =>
                        addToBasket({
                            id,
                            displayName,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <div style={{ fontSize: "0.8rem", color: "#424242" }}>
                    <span>Уникальность: {rarityFinal}</span>
                    <br />
                    <span>Дата появления: {firstReleaseDate}</span>
                    <br />
                    <span>Тип: {displayType}</span>
                    <br />
                    <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                        {finalPrice} руб.
                    </span>
                </div>
            </div>
        </div>
    );
}

export { GoodsItem };

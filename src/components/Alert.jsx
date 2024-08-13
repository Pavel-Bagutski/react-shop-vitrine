import { useEffect } from "react";

function Alert(props) {
    const { displayName = "", closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timeId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timeId);
        };
        //eslint-disable-next-line
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">{displayName} добавлен в корзину</div>
        </div>
    );
}
export { Alert };

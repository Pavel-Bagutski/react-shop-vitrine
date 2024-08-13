function Header() {
    return (
        <nav className=" #6a1b9a purple darken-3">
            <div className="nav">
                <a
                    href="#"
                    className="brand-logo"
                >
                    React shop
                </a>
                <ul
                    id="nav-mobile"
                    className="right hide-on-med-and-down"
                >
                    <li>
                        <a href="!#">Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };

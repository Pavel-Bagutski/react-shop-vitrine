function Footer() {
    return (
        <footer className=" #e53935 red darken-1 ">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/Pavel-Bagutski?tab=repositories"
                        target="blank"
                        rel="noopener"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}
export { Footer };

import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {

    return (
        <div >
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">අකුරු හුරුව</a>
                    <button title="a" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/pages/about">අපි ගැන</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/pages/help">උදව්</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/pages/write">අකුරු ලියමු</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/calculator">Calculatrice</Link>
            <Link to="/convertor">Convertisseur</Link>
        </nav>
    );
}

export default Navigation;
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Olive</div>
            <ul className="nav-links">
                <li>Solutions</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Restaurants</li>
                <li>Food</li>
            </ul>
            <div className="nav-actions">
                <button className="signin">Sign in</button>
                <button className="cta">Get Olive</button>
            </div>
        </nav>
    );
}

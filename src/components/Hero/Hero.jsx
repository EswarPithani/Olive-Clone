import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <h1>The Safest Way to Shop for Groceries</h1>
            <p>
                Use the Olive Food Scanner App to instantly eliminate harmful ingredients
                and get expert-backed food insights.
            </p>
            <div className="hero-buttons">
                <button className="primary">Download for iOS</button>
                <button className="secondary">Join Community</button>
            </div>
        </section>
    );
}

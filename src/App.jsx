import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductDemo from "./components/ProductDemo/ProductDemo";
import TrustBadge from "./components/TrustBadge/TrustBadge";

function App() {
    return (
        <>
            <Navbar />
            <TrustBadge />
            <Hero />
            <ProductDemo />
        </>
    );
}

export default App;

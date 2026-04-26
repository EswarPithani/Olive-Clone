import "./ProductDemo.css";
import demo from "../../assets/demo.jpg";
import demo2 from "../../assets/image.png";
export default function ProductDemo() {
    return (
        <section className="demo">
            <div className="phone">
                <img src={demo} alt="demo" />
                <img src={demo2} alt="demo2" />

            </div>
        </section>
    );
}

// GalleryPage.jsx

import { useParams, Link } from "react-router-dom";
import "../styles/kitsDetails.css";

import img1 from "../assets/MT 1.jpeg";
import img2 from "../assets/MT 2.jpeg";
import img3 from "../assets/MT 3.jpeg";
import img4 from "../assets/MT 4.jpeg";
import img5 from "../assets/MT 5.jpeg";
import img6 from "../assets/MT 6.jpeg";
import img7 from "../assets/MT 7.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function GalleryPage() {
  const { type } = useParams();

  return (
    <div className="kitDetailsPage">
      <section className="kitDetailsHero container">
        <h1>
          {type === "products"
            ? "Products Gallery"
            : "Templates Gallery"}
        </h1>

        <p>Choose your preferred design</p>
      </section>

      <section className="detailSection container">
        <div className="detailGrid">
          {images.map((img, i) => (
            <div className="detailCard" key={i}>
              <img src={img} alt="Gallery Item" />

              <div className="galleryButtons">
                <button className="buyBtn">
                  Buy
                </button>

                <Link to="/custom" className="customBtn">
                  Get Customized
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
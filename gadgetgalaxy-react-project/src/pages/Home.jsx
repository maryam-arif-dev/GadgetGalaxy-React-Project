import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="hero-section">
            <div className="headline">Next-Gen Tech for Your Daily Life.</div>
            <div className="sub-headline">
              From flagship smartphones to high-performance PCs, upgrade your
              world with GadgetGalaxy.
            </div>
            <div className="button-div">
              <Link to="/products" className="button">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

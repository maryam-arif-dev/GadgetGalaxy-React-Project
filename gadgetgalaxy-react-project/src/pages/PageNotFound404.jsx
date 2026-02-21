import { Link } from "react-router-dom";
export default function PageNotFound404() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="hero-section">
            <div className="headline">Page not found!</div>
            <div className="button-div">
              <Link to="/" className="button">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

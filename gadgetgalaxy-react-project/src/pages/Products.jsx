import { Link } from "react-router-dom";
import { gadgetProducts } from "../data/products";
export default function Products() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        {gadgetProducts.map((product) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            key={product.id}
          >
            <div className=" card glass-card">
              <h5 className="card-header">Products</h5>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Category: {product.category}</p>
                <div className="button-div">
                  <Link to={`/products/${product.id}`} className="button">
                    {" "}
                    View Details{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const navigate = useNavigate();
  if (!product) {
    return (
      <section className="container py-5">
        <div className="alert alert-danger rounded-4">Product not found.</div>
        <div className="button-div">
          <button onClick={() => navigate("/products")} className="button">
            {" "}
            Back to Products{" "}
          </button>
        </div>
      </section>
    );
  }
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
          <div className=" card glass-card">
            <h5 className="card-header">Products</h5>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Category: {product.category}</p>
              <p className="card-text">Price: ${product.price}</p>
              <p className="card-text">Description: {product.description}</p>

              <div className="button-div">
                <button onClick={() => navigate(-1)} className="button">
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

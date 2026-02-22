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
            <h5 className="card-header">Product</h5>
            <div className="card-body">
              <p className="card-text">
                <img
                  src={product.iamge}
                  alt={product.name}
                  className="card-img-top image"
                />
              </p>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                <b>{product.category}</b>
              </p>
              <p className="card-text">
                <b>${product.price}</b>
              </p>
              <p className="card-text">
                <b>{product.description}</b>
              </p>
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

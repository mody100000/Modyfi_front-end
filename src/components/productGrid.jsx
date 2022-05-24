import { Link } from "react-router-dom";
import Like from "../common/like";
const ProductsGrid = ({ products, getCategory, getImage, handleLike }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
      {products.map((p) => (
        <div className="card bg-base-100 shadow-md hover:shadow-xl duration-300 ease-in-out">
          <Link to={`/products/${p.id}`} key={p.id}>
            <figure>
              <img
                src={
                  `http://localhost:5000/uploads/products-images/` +
                  getImage(33)
                }
                alt="product image"
                className="h-80 w-full object-cover"
              />
            </figure>
          </Link>

          <div className="card-body">
            <h2 className="card-title">{p.name}</h2>
            <div className="card-actions justify-between">
              <span className="bg-primary rounded-lg text-2xl py-1 px-3 text-white border-none">
                {p.price} $
              </span>
              <Like liked={p.liked} onClick={() => handleLike(p)} />
              <div className="badge badge-outline">
                {getCategory(p.genre_id)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;

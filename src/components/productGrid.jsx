import { Link } from "react-router-dom";
import Like from "../common/like";
const ProductsGrid = ({ products, getCategory, getImage, handleLike }) => {
  return (
    <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-3">
      {products.map((p) => (
        <div className="duration-300 ease-in-out shadow-md card bg-base-100 hover:shadow-xl">
          <Link to={`/products/${p.id}`} key={p.id}>
            <figure>
              <img
                src={`http://localhost:5000/uploads/products-images/${p.img_name}`}
                alt="product image"
                className="object-cover w-full h-80"
              />
            </figure>
          </Link>

          <div className="card-body">
            <h2 className="card-title">{p.name}</h2>
            <div className="justify-between card-actions">
              <span className="px-3 py-1 text-2xl text-white border-none rounded-lg bg-primary">
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

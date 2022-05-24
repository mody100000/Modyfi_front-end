import ProductsTable from "../../components/products-table";
import Dashboard from "../../higher-order/dashboard";
import { Link } from "react-router-dom";

const ProductsDashboard = () => {
  return (
    <div className="flex flex-col flex-wrap overflow-y-auto p-5">
      <div className="px-9 py-5 flex justify-between">
        <Link
          to="/dashboard/products/insert"
          className="bg-accent text-md shadow-lg btn btn-rounded border-0 mr-3"
        >
          <i className="fa fa-plus"></i>
          <span className="font-sans text-lg">Add a new product</span>
        </Link>
      </div>

      <div className="my-5">
        <ProductsTable />
      </div>
    </div>
  );
};

const ProductsDashboardComponent = () => {
  return Dashboard(ProductsDashboard);
};
export default ProductsDashboardComponent;

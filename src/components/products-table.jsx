const ProductsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full text-sm md:text-lg lg:text-lg">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Added by</th>
            <th>Stock</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <td>
              <img className="w-20 h-20 object-cover mr-3" src="" />
            </td>
            <td className="font-bold italic">Product 1</td>
            <td>
              6000 <i className="fa fa-dollar"></i>
            </td>
            <td>john smith</td>
            <td>
              <span>400</span>
            </td>
            <td>
              <a
                className="btn btn-outline"
                href="/dashboard/products/edit/{{$p->id}}"
              >
                edit
              </a>
            </td>

            <td>
              <a className="btn btn-error">
                <i className="fa fa-trash"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;

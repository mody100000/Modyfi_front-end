import React, { Component } from "react";
import Dashboard from "../../higher-order/dashboard";
import { getGenres } from "../../utils/api/genres";
import { insertProduct } from "../../utils/api/products";

class CreateProductPage extends Component {
  state = {
    name: "",
    desciption: "",
    price: "",
    stock: "",
    product_img: "",
    genre_id: "",
    genres: [],
  };
  componentDidMount() {
    const getGenresData = async () => {
      const genres = await getGenres();
      this.setState({ genres, genre_id: genres[0].id });
    };

    getGenresData();
  }

  onImageChange = (e) => {
    this.setState({ product_img: e.target.files[0] });
  };

  handleSubmit = async () => {
    const data = {
      name: this.state.name,
      description: this.state.desciption,
      price: this.state.price,
      stock: this.state.stock,
      genre_id: this.state.genre_id,
      added_by: "1",
    };
    const formData = new FormData();
    formData.append("product_img", this.state.product_img);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("genre_id", data.genre_id);
    formData.append("added_by", data.added_by);
    const res = await insertProduct(formData);
    console.log(res);
  };

  render() {
    return (
      <div className="container">
        <div className="form-control justify-between flex flex-col p-3 md:p-7 h-auto md:h-screen text-md md:text-lg overflow-y-auto">
          <div className="mx-auto mb-4 font-bold text-2xl">
            RELEASE A NEW PRODUCT
          </div>

          <label className="input-group shadow-md my-2">
            <span className="bg-accent text-white">Product Name</span>
            <input
              type="text"
              name="name"
              className="input input-bordered flex-1"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </label>

          <label className="input-group shadow-md my-2">
            <span className="bg-accent text-white">Product Description</span>
            <textarea
              className="textarea flex-1 h-52"
              name="description"
              onChange={(e) => {
                this.setState({ desciption: e.target.value });
              }}
            ></textarea>
          </label>

          <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <label className="input-group shadow-md">
              <span className="bg-accent text-white">Price (USD)</span>
              <input
                type="number"
                name="price"
                className="input input-bordered flex-1"
                step=".01"
                onChange={(e) => {
                  this.setState({ price: e.target.value });
                }}
              />
            </label>
            <label className="input-group shadow-md">
              <span className="bg-accent text-white">Stock</span>
              <input
                type="number"
                name="stock"
                className="input input-bordered flex-1"
                step=".01"
                onChange={(e) => {
                  this.setState({ stock: e.target.value });
                }}
              />
            </label>
          </div>

          <label className="input-group shadow-md my-2 float-left mr-auto w-auto">
            <span className="bg-accent text-white">Categories</span>
            <select
              className="select select-bordered w-auto select-lg"
              id="select-categories"
              onChange={(e) => this.setState({ genre_id: e.target.value })}
              value={this.state.genre_id}
            >
              {this.state.genres.map((g) => (
                <option value={g.id} key={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
          </label>
          <div id="categories-list" className="flex flex-wrap my-4"></div>
          <input name="categories" id="categories" type="text" hidden />
          {/* upload image */}
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-primary hover:text-white">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input
              onChange={this.onImageChange}
              type="file"
              className="hidden"
            />
          </label>

          <button
            onClick={this.handleSubmit}
            className="btn btn-success text-white rounded-full float-left mr-auto text-lg my-4"
          >
            Publish
          </button>
        </div>
      </div>
    );
  }
}

const CreateProduct = () => {
  return Dashboard(CreateProductPage);
};
export default CreateProduct;

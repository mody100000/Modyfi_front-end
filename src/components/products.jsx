import React, { Component } from "react";
// import { products as productsArr } from "../utils/products";
import { getLatestProducts } from "../utils/api/products";
import { categories } from "../utils/categories";
import axios from "axios";

import ProductsGrid from "./productGrid";
class Products extends Component {
  state = {
    products: [],
    images: [],
  };
  componentDidMount() {
    const getProducts = async () => {
      const products = await getLatestProducts();
      this.setState({ products });
    };
    getProducts();
  }
  getCategory(id) {
    let categoryName;

    for (let i = 0; i < categories.length; i++) {
      const cat = categories[i];
      if (cat._id == id) {
        categoryName = cat.name;
        break;
      }
    }
    if (categoryName) return categoryName;

    // category not found
    // return "not found";
  }
  async getImage(id) {
    const res = await axios.get(
      "http://localhost:5000/api/products/image/" + id
    );
    console.log(res);
    return res.data.image.name;
  }
  handleLike = (p) => {
    const products = [...this.state.products];
    const index = products.indexOf(p);
    products[index] = { ...products[index] };
    products[index].liked = !products[index].liked;
    this.setState({ products });
    console.log(p);
  };
  render() {
    return (
      <ProductsGrid
        products={this.state.products}
        getCategory={this.getCategory}
        getImage={this.getImage}
        handleLike={this.handleLike}
      />
    );
  }
}

export default Products;

import React, { Component } from "react";
import ProductsGrid from "../components/productGrid";
import { categories } from "../utils/categories";

import { getProducts } from "../utils/api/products";

class New extends Component {
  state = {
    products: [],
    images: [],
  };
  componentDidMount() {
    const getAllProducts = async () => {
      const products = await getProducts();
      this.setState({ products });
    };
    getAllProducts();
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
  getImage(imgName) {
    try {
      const image = require(`../images/${imgName}`);
      return image;
    } catch (err) {
      const noImage = require(`../images/no-image.jpg`);
      return noImage;
    }
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
      <div className="mx-auto p-10">
        <ProductsGrid
          products={this.state.products}
          getCategory={this.getCategory}
          getImage={this.getImage}
          handleLike={this.handleLike}
        />
      </div>
    );
  }
}

export default New;

import React, { Component } from "react";
import { getProductById } from "../utils/api/products";
class ProductPage extends Component {
  state = {
    product: {
      name: "",
      price: "",
      description: "",
    },
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    const getPRoduct = async () => {
      const responese = await getProductById(id);
      this.setState({ product: responese.data });
    };
    getPRoduct();
  }
  render() {
    return <div></div>;
  }
}

export default ProductPage;

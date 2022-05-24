import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
const getLatestProducts = async () => {
  const res = await axios.get("/api/products/new");
  return res.data.data;
};

const getProducts = async () => {
  const res = await axios.get("/api/products");
  return res.data.data;
};

const getProductById = async (id) => {
  const res = await axios.get(`/api/products/product`, {
    params: {
      id,
    },
  });
  return res.data;
};

const insertProduct = async (data) => {
  const res = await axios.post(`/api/products/insert`, data);
  return res.data;
};
export { getLatestProducts, getProducts, getProductById, insertProduct };

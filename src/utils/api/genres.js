import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

export const getGenres = async () => {
  const res = await axios.get("/api/genres");
  return res.data.data;
};

export const addGenre = async (name) => {
  const res = await axios.post("/api/genres", { name });
  return res.data;
};

export const deleteGenre = async (id) => {
  const res = await axios.delete("/api/genres/" + id);
  return res.data;
};

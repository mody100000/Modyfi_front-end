import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import Dashboard from "../../higher-order/dashboard";
import { addGenre, deleteGenre, getGenres } from "../../utils/api/genres";
const Categories = () => {
  const [cat_name, setCat_name] = useState("");
  const [categories, setCategories] = useState([]);

  const { addToast } = useToasts();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addGenre(cat_name);
      setCategories([res.data, ...categories]);
    } catch (err) {
      addToast("category is already exist", {
        appearance: "error",
        autoDismiss: 4000,
      });
    }
  };

  const handleDelete = async (id) => {
    await deleteGenre(id);
    const updated_categories = categories.filter((c) => c.id != id);
    setCategories(updated_categories);
  };

  useEffect(async () => {
    const categories = await getGenres();
    setCategories(categories);
  }, []);

  return (
    <div>
      <form className="w-full lg:w-1/2 p-4 shadow-lg m-10">
        <label className="input-group my-2">
          <span className="bg-base-200 w-40">Category Name</span>
          <input
            required
            type="text"
            className="input input-bordered flex-1"
            onChange={(e) => {
              setCat_name(e.target.value);
            }}
          />
        </label>
        <button
          onClick={handleSubmit}
          className="btn btn-outline my-4 mr-auto font-bold rounded-r-full"
        >
          Add
        </button>
      </form>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid:cols-6 p-5">
        {/*  */}
        {categories.map((c) => (
          <div className="card bg-neutral text-base-100 shadow-xl" key={c.id}>
            <div className="card-body">
              <h2 className="card-title">{c.name}</h2>
              <div className="card-actions justify-end mt-3">
                <button
                  onClick={() => {
                    handleDelete(c.id);
                  }}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    </div>
  );
};

const CategoriesPage = () => {
  return Dashboard(Categories);
};
export default CategoriesPage;

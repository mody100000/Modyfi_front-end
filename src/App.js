import { Route, Redirect, Routes, useLocation } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/navbar";
import New from "./pages/new";
import LoginForm from "./pages/loginForm";
import Index from "./pages/dashboard";
import Register from "./components/register";
import ProductsDashboard from "./pages/dashboard/products";
import ProductPage from "./pages/product-page";
import CreateProduct from "./pages/dashboard/create-product";
import CategoriesPage from "./pages/dashboard/categories";
import NotFound from "./components/notFound";
import Footer from "./components/footer";

function App() {
  const startUrl = useLocation().pathname.split("/")[1];

  return (
    <>
      {startUrl !== "dashboard" ? <NavBar /> : null}

      <Routes>
        {/* dashboard routes */}
        <Route path="/dashboard/products/insert" element={<CreateProduct />} />
        <Route path="/dashboard/products" element={<ProductsDashboard />} />
        <Route path="/dashboard/categories" element={<CategoriesPage />} />
        <Route path="/dashboard" element={<Index />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

{
  /* <main className="container">
  <Switch>
    <Route path="/login" component={LoginForm}></Route>
    <Route path="/movies/:id" component={MovieForm}></Route>
    <Route path="/movies" component={Movies}></Route>
    <Route path="/customers" component={Customers}></Route>
    <Route path="/rentals" component={Rentals}></Route>
    <Route path="/not-found" component={NotFound}></Route>
    <Redirect from="/" exact to="/movies"></Redirect>
    <Redirect to="not-found"></Redirect>
  </Switch>
</main>; */
}

export default App;

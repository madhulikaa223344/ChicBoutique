import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/layout/layout";
import "../styles/Layout.css";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="category" style={{ background:"url(images/background_category.jpg",backgroundSize: 'cover', height:"76vh",
        backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
        <div className="row ">
          {categories.map((c) => (
            <div className="col-md-3" key={c._id}>
              <div className="d-flex justify-content-between">
              <Link to={`/category/${c.slug}`} className="btn btn-primary">
                {c.name}
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
import React, { useEffect, useState } from "react";
import NavbarComp from "../Components/NavbarComp";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCate, setFoodCate] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:7000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCate(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      
        <NavbarComp />
      

      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div
              className="carousel-item active"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            >
              <img
                src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ fill: "brightness(30%)" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div
              className="carousel-item"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            >
              <img
                src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ fill: "brightness(30%)" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div
              className="carousel-item"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            >
              <img
                src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ fill: "brightness(30%)" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid d-flex ">
        <div className="mx-3">
        {foodCate.length !== 0
          ? foodCate.map((data) => {
              return (
                <div className="row mb-3 d-flex justify-content-center">
                  <div key={data.id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem.length !== 0 ? (
                    foodItem
                      .filter(
                        (items) =>
                          items.CategoryName === data.CategoryName &&
                          items.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems.id}
                            className="col-12 col-md-5 col-lg-3 mx-3 d-flex justify-content-center"
                          >
                            <Card
                              foodItems={filterItems}
                              options={filterItems.options[0]}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div> No Such Data </div>
                  )}
                </div>
              );
            })
          : ""}
        </div>
      </div>

        <Footer />
      
    </div>
  );
}

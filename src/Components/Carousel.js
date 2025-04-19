import React from "react";

export default function Carousel() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
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
    </>
  );
}

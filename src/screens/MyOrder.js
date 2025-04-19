import React, { useState, useEffect } from "react";
import NavbarComp from "../Components/NavbarComp";
import Footer from "../Components/Footer";

export default function MyOrder() {
  const [orderData, setorderData] = useState({});
  const fetchMyOrder = async () => {
    // console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:7000/api/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);
  return (
    <>
      <div>
        <NavbarComp />
      </div>
      <div>
        <div className="container-fluid">
          <div className="row">
            {Object.keys(orderData).length !== 0
              ? Array(orderData).map((data) => {
                  return data.orderData
                    ? data.orderData.order_data
                        .slice(0)
                        .reverse()
                        .map((item) => {
                          
                          
                          return item.map((arrayData,index) => {
                            
                            return (
                              <div key={index}>
                                {arrayData.Order_date ? (
                                  <div className="m-auto mt-5">
                                    {(data = arrayData.Order_date)}
                                    <hr />
                                  </div>
                                ) : (
                                  <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                                    <div
                                      className="card mt-3"
                                      style={{
                                        width: "16rem",
                                        maxHeight: "360px",
                                      }}
                                    >
                                      <img
                                        src={arrayData.img}
                                        className="card-img-top"
                                        alt="..."
                                        style={{
                                          height: "150px",
                                          objectFit: "fill",
                                        }}
                                      />
                                      <div className="card-body">
                                        <h5 className="card-title">
                                        {arrayData.name}
                                        </h5>
                                        <div
                                          className="container w-100 p-0"
                                          style={{ height: "100px" }}
                                        >
                                          <span className="m-1 fs-5">
                                            {arrayData.qty}
                                          </span>
                                          <span className="m-1 fs-5">
                                            {arrayData.size}
                                          </span>
                                          <div className="m-1 fs-4">{data}</div>
                                          <div className=" ms-2 h-100 w-20 fs-4">
                                            ₹{arrayData.price}/-
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          });
                        })
                    : "";
                })
              : ""}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

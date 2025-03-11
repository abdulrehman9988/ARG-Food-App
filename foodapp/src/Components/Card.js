import React, { useEffect, useRef, useState } from 'react'
import { useDispatch,useCart } from './ContextReducer';

export default function Card(props) {
  let dispatch=useDispatch();
  let data=useCart();
  const priceRef=useRef();
  let options = props.options;
  let priceOptions = Object.keys(options)
  const [qty, setQty]=useState(1);
  const [size, setSize]=useState("");

  const handleAddToCart=async()=>{

    let food = []
    for (const item of data) {
      if (item.id === props.foodItems._id) {
        food = item;

        break;
      }
    }

    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItems._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD",id:props.foodItems._id, name:props.foodItems.name, img:props.foodItems.img, price:finalPrice, qty:qty, size:size})
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }
    

     await dispatch({type:"ADD",id:props.foodItems._id, name:props.foodItems.name, img:props.foodItems.img, price:finalPrice, qty:qty, size:size})
     console.log(data);
     
  }
  let finalPrice=qty*parseInt(options[size])
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <>

        <div
          className="card mt-3"
          style={{ width: "250px", maxHeight: "360px" }}
        >
          <img src={props.foodItems.img} className="card-img-top" alt="..."  style={{height:"150px",objectFit:"fill"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.foodItems.name}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-secondary rounded" onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 bg-secondary rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
              {priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })}
              </select>

              <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
            </div>
            <hr/>
            <button className='btn btn-secondary text-light ms-2' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>

    </>
  )
}

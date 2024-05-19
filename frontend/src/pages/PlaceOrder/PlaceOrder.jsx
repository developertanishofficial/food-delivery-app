import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))

  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    // console.log(orderItems);
    let orderData = {

      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,

    }
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);

    }
    else {
      alert("Error")
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart")

    }
    else if(getTotalCartAmount()===0){
      navigate("/cart")

    }
    

  }, [token])

  // useEffect(()=>{
  //   console.log(data);

  // },[data])


  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='first name' required />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='last name' required />
        </div>

        <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='email' required />
        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='street' required />


        <div className="multi-fields">
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='city' required />
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='state' required />
        </div>


        <div className="multi-fields">
          <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='zipcode' required />
          <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='country' required />
        </div>
        <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='phone no.' required />



      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="div">
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>

            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>

            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b> ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>

            </div>
          </div>
          <button type='submit'>PROCESSED TO PAYMENT</button>
        </div>


      </div>
    </form>
  )
}

export default PlaceOrder

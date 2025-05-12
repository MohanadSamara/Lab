import React, {useState} from "react";
function MyComponent(){
    const [name, setname]= useState("");

    const [Quantity, setQuantity]= useState(0);

    const [comment, setComment]= useState("");

    const [payment, setPayment]= useState("Vise");

    const [Shipping, setShipping]= useState("");


    function nameChange(event){
        setname(event.target.value);
    }

    function quantityChange(event){
        setQuantity(event.target.value);
    }

    function commentChange(event){
        setComment(event.target.value);
    }

    function paymentChange(event){
        setPayment(event.target.value);
    }

    function shippingChange(event){
        setShipping(event.target.value);
    }

    return(<div>
        <input value={name} onChange={nameChange} />
        <p>Name: {name}</p>

        <input value={Quantity} onChange={quantityChange} type="number" />

        <p>Quantity: {Quantity}</p>

        <textarea 
  value={comment} 
  onChange={commentChange} 
  placeholder="enter your comment"
></textarea>
        <p>Comment: {comment}</p>

        <select name="" id="" value={payment} onChange={paymentChange}>
            <option value="">slect an option</option>
            <option value="cash">Cash</option>
            <option value="Vise">Vise</option>
            <option value="Master Card">Master Card</option>




        </select>
        <p>Payment: {payment}</p>

        <label >
        <input type="radio" value="Pick Up" checked={Shipping === "Pick Up"} onChange={shippingChange} />
            Pick Up
        </label><br />
        <label >
        <input type="radio" value="Delivery" checked={Shipping === "Delivery"} onChange={shippingChange} />
        Delivery
        </label>
        <p>Shipping: {Shipping}</p>
    </div>);
}
 

export default MyComponent;
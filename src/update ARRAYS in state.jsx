import React,{useState} from "react";

function UpdateArrays(){
    const [foods, setfood]= useState(["pizza", "burger", "fries"]);

    function handelAddFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setfood(foods => [...foods, newFood]);
        
    }

    function handelRemoveFood(index){

        setfood(foods.filter((_, i)=> i !== index));
        
    }

    return(
        <div>
            <h1>list of food</h1>

            <ul>
                {foods.map((food,index)=> <li key={index} onClick={() => handelRemoveFood(index)}> {food} </li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="enter food name" />

            <button onClick={handelAddFood}>add food</button>

        </div>
    );


}

export default UpdateArrays;
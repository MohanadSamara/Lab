import React,{useState} from "react";
function UpdateObjects(){
const [car,setCar]= useState({

    year: 2025,

     make: "toyota",
     module: "corolla"
});

function carYear(e){

    setCar(car=> ({...car, year: e.target.value}))


}

function carMake(e){
    setCar(car=> ({...car, make: e.target.value}))

}   
function carModule(e){
    setCar(car=> ({...car, module: e.target.value}))

}
return(
    <div>
        <p>your favorite car is: {car.year} {car.make} {car.module}</p>
       <input type="number" value={car.year} onChange={carYear} />
         <input type="text" value={car.make} onChange={carMake} />
            <input type="text" value={car.module} onChange={carModule} />

    </div>
)

}
export default UpdateObjects;
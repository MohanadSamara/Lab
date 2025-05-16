import Recat, { useState } from 'react';

function UpdateArrayOfObjects() {

    const [cars,setCar]= useState([]);
    const [year,setYear]= useState(new Date().getFullYear());
    const [make,setMake]= useState("");
    const [model,setModel]= useState("");

    function handelAddCarr(){
        const newCar={
            year: year,
            make: make,
            model: model
        }

        setCar(cars => [...cars, newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");



    }

    function handelRemoveCar(index){

        setCar(c => c.filter((_, i) => i !== index));

}

function handelYeaerChange(event){

    setYear(event.target.value);

}

function handelMakeChange(event){
    setMake(event.target.value);
}

function handelModelChange(event){
    setModel(event.target.value);

}



    return (
        <div>
            <h1>List of Cars</h1>

            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handelRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>

            <input type="number" id="yearInput"  value={year} onChange={handelYeaerChange} /> <br />
            <input type="text" id="makeInput" placeholder="Enter make" value={make} onChange={handelMakeChange} /> <br />
            <input type="text" id="modelInput" placeholder="Enter model" value={model} onChange={handelModelChange} /> <br />

            <button onClick={handelAddCarr}>Add Car</button>

        </div>
    );


}

export default UpdateArrayOfObjects;
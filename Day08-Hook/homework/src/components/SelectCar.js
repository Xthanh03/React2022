import { useState, useEffect } from "react";
function SelectCar() {
    const carList = ["Xe1", "Xe2", "Xe3", "Xe4"];
    const colorList = ["Red", "Green", "Yellow", "Blue"];

    let [car, setCar] = useState("Xe1");
    let [color, setColor] = useState("Red");

    useEffect(() => {

    }, [selected]);
    return (
        <div>
            Select Car and Color :
            <select onChange={(e) => {
                choice(e);
            }}
            >
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">Javascript</option>
                <option value="3">Php</option>
            </select>
            <h2>Your selected: {valueSelected}</h2>
        </div>
    );

}
export default SelectCar;
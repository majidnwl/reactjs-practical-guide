import { useState } from "react";

const LearnState = () => {
    var [value, setValue] = useState("Hamid ali");

    const changeValue = () => {
        setValue('Ali Raza');
        console.log(value);
    }
    return (
        <>
            <div>{value}</div>
            <button onClick={() => changeValue()}>Updat Value</button>
        </>
    );
}

export default LearnState;
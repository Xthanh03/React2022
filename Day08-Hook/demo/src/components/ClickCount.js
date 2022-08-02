import { useState } from "react";

export default function ClickCount() {
    const [count, setCount] = useState(0);
    let increaseByOne = () => {
        setCount(count + 1);
    }
    return (
        <div className="container pt-5">
            <span>{count}</span>
            <button onClick={increaseByOne}>Increase By One</button>
        </div>
    )
}
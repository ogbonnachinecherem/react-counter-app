import React, {useState} from 'react';

const FunctionCounter = () => {
    const [count, handleUpdate] = useState({number:0});
    
    return (
    
        <section>
        <h1 id="counter1">Counter: {count.number}</h1>
        <hr/>
        <button id="bt1" onClick={()=> handleUpdate({number: count.number +1})}>Increase count</button>
        <button id="bt2" onClick={()=> handleUpdate({number: count.number -1})}>Decrease count</button> 
            
        </section>
    );
}

export default FunctionCounter;

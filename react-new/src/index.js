import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const App=(props)=>{
    
    const [count,setCount]=useState(props.count)

    const increment=()=>{
        setCount(count+1)
    }
    
    return(<div>
    <p>the count is {count}</p>
    <button onClick={()=>{setCount(count-1)}}>-1</button>
    <button onClick={increment}>+1</button>
    <button onClick = {()=>{setCount(props.count)}}>reset</button>
    </div>)
}


ReactDOM.render(<App count ={0}></App>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

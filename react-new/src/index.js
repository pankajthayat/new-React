import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const App=(props)=>{
    
    const [state,setState]=useState({count:props.count, text: props.text})

    const increment=()=>{
        setState({count:state.count+1})
    }
    
    return(<div>
    <p>the {state.text || "count"} is {state.count}</p>
    <button onClick={()=>{setState({count:state.count-1})}}>-1</button>
    <button onClick={increment}>+1</button>
    <button onClick = {()=>{setState({count:props.count})}}>reset</button>
    <input value={state.text} onChange={(e)=>{setState({text:e.target.value})}}/>
    </div>)
}



/*const App=(props)=>{
    
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
}*/


ReactDOM.render(<App count ={0}></App>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

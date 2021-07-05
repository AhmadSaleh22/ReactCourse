import './App.css';
import Name from './Name';
import { useState } from 'react';


function App() {
  
  
  const [count, setCount] = useState(0);
  
  const decrement  =()=> {
    setCount(count - 1);
  }
  
  const onChangeFun = (event ) =>{
    setTimeout(function (){
      console.log(event.target.value);
    }, 3000);
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Name name="ahmad saleh" />
          <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action active" onClick={decrement}>Active item</button>
            <div class="form-group">
              <label for="username">User Name</label>
              <input type="text" onChange= {onChangeFun}
                class="form-control" name="username" id="username" aria-describedby="helpId" placeholder=""/>
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
          </div>
          {count}
        </p>
      </header>
    </div>
  );
}

export default App;

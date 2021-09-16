import './App.css';
import Results from "./Components/Dados/results"
import Home from "./Components/Home/index"
import {Switch,Route} from "react-router-dom"
import {useState} from "react"



function App() {

  const [dados,setDados]=useState([])  
  
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home  setDados={setDados} />
          </Route>
          <Route exact path="/results">
            <Results dados={dados}/>
          </Route>
        </Switch>
      
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { Route } from "react-router-dom";
import landing from './components/Landing/landing';
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import AddActivity from './components/AddActivity/addActivity'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={landing} />
      <Route path= '/home/'component = {Home} />   
      <Route exact path= '/home/countries/:id' component={Country}/>
      <Route exact path= '/Activity' component={AddActivity}/>

    </div>
  );
}

export default App;

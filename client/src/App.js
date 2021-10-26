import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import AddActivity from './components/AddActivity/addActivity'
import CountryDetail from './components/CountryDetail/CountryDetail';
import Notfound from './components/Notfound/Notfound';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'


function App() {
  return (
    <div className="App">
    <Provider store = {store} >
      <BrowserRouter>
          <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path= '/home/'component = {Home} />   
          <Route exact path= '/home/countries/:id' component={CountryDetail}/>
          <Route exact path= '/Activity' component={AddActivity}/>
          <Route component={Notfound}/>
          </Switch>
        </BrowserRouter>
    </Provider>

    </div>
  );
}

export default App;

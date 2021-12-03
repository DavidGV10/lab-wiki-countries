import './App.css';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Route } from "react-router-dom";
import NavBar from './components/NavBar'
import {useState, useEffect} from 'react'
const axios = require("axios");


function App() {

  const [countries, setCountries] = useState({})

  useEffect(()=>{
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((response)=>{
        setCountries(response)
    })
    .catch(console.log)
}
,[])
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
        <CountriesList countries={countries}/>       
        <Route exact path={"/:id"} render={(props)=><CountryDetails {...props} countries={countries}/>} />       
        </div>
      </div>
    </div>
  );
}

export default App;

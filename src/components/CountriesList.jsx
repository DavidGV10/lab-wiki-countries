import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import data from '../countries.json'

export default function CountriesList(props){
    const countries = props.countries.data
    //Iteration 3
    //const [countries, setCountries] = useState({})
    //useEffect(()=>{
    //    console.log("hello")
    //    setCountries(data)
    //    }, [] );

    return (
        <div>
            {countries && countries.map((country)=>{
                return (
                    <div className="countryContainer">
                    <img src={`www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt={country.name.common} />
                    <Link key={country.alpha3Code} to={country.alpha3Code}>{country.name.common}</Link>
                    </div>
                )   
            })
            }
        </div>
    )
}
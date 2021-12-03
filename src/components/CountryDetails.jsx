import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
const axios = require("axios");

export default function CountryDetails(props){
    const {id} = useParams()
    const [country, setCountry] = useState({})

    useEffect(()=>{
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    .then((response)=>{
        setCountry(response.data)
    })
    .catch(console.log)
}
,[])
    return (
        <div>
            <div>{country.name}</div>
            <div className="countryDetails">
                <div className="details">
                    <div>Capital</div>
                    <div>{country.capital}</div>
                </div>
                <div className="details">
                    <div>Area</div>
                    <div>{country.area}</div>
                </div>
                <div className="details">
                    <div>Borders</div>
                    <div>
                        {country.borders.map((c)=>{
                            console.log(c)
                            return (
                                <p>
                                    <Link key={country.alpha2Code} to={country.alpha3Code}>{country.name.common}</Link>
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        
    )
}
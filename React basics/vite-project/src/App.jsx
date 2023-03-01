import { useState,useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [singleCountry,setSingleCountry] = useState("")
  const [cities,setCities] = useState([]);
  const [singleCity,setSingleCity] = useState("");
  const [submit, setSubmit] = useState(false)

  const fetchCountries = async () => {
    try{
      const country = await axios.get("https://countriesnow.space/api/v0.1/countries");
      setCountries(country.data.data)
    }catch(error){
      console.log(error);
    }
  }

  const submitHandle = () => {
    if(singleCountry && singleCity){
      setSubmit(true)
    }
  }

  const fetchCities = (country) => {
    setSubmit(false);
    setSingleCity(null);
    setSingleCountry(country);
    const findCities = countries.find((c) => c.country === country);
    setCities(findCities.cities);
  }

  useEffect(() => {
    fetchCountries();
  }, [])
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>Select Your HomeTown</h1>
        <div>
         {countries && (
           <select onChange={(e) => fetchCities(e.target.value)} value={singleCountry}>
            <option selected hidden disabled>Select Country</option>
            {countries.map((country) => (
              <option key={`${country.country}-${Date.now()}`}>
                {country.country}</option>
            ))}
          </select>
            )}

      { cities && <select onChange={(e) => setSingleCity(e.target.value)} value={singleCity}>
          <option selected hidden disabled>Select City</option>
            {cities.map((city) => (
              <option value={city} key={city}>{city}</option>
            ))}
        </select>}
          <button onClick={submitHandle}>Go</button>
        </div>
{ submit && (
  <h2>Your Country is {singleCountry} and the city u live is {singleCity}</h2>
)}
      </div>
    </div>
  )
}

export default App

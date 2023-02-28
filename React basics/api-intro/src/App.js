import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries]=useState([])
  const [cities, setCities] = useState("")
  const fetchCountries = async () => {
    try {
      const country = await axios.get('https://countriesnow.space/api/v0.1/countries');
      setCountries(country.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=> {
    fetchCountries()
  },[]);
  return <div className='App container'>
    <div className='address'>
    <h1>Select Your HomeTown</h1>
      {countries && <select onChange={(e) => setCities(e.target.value)}>
        <option disabled selected hidden>
          Select country
        </option>
        {
          countries.map((country) => (
            <option key={`${country.country}-${Date.now()}`} value={country.country}>{country.country}</option>
          ))}
      </select>}
      <select>
        <option disabled selected hidden>
          Select City
        </option>
        <option>Mumbai</option>
        <option>Banglore</option>
      </select>
      <button>Go</button>
    </div>
    </div>
}

export default App;

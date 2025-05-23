import { useState, useEffect } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import Details from './components/Details';

function App() {

 // const [searchTerm, setSearchTerm] = useState('');
  const [countriesArray, setCountriesArray] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState({});
  const [viewDetails, setViewDetails] = useState(false);

  const API_URL_ALL = 'https://restcountries.com/v3.1/all';
  //const API_URL_DETAILS = `https://restcountries.com/v3.1/all?fields=${searchTerm}`;

const fetchData = () => {

  fetch(API_URL_ALL)
    .then((response) => response.json())
    .then((countriesArrayAll) => {

  const countries = countriesArrayAll.map((country) => {

  const nativeNameObj = country.name.nativeName;
  const nativeCommon = nativeNameObj
    ? Object.values(nativeNameObj)[0]?.common
    : 'brak';

  return {
    area: country.area.toLocaleString(),
    capital: country.capital,
    coatOfArms: country.coatOfArms.svg,
    coatOfArmsAlt: 'Godło kraju',
    continent: country.continents,
    countryName: country.translations?.pol?.common || country.name.common,
    countryNameOfficial: country.translations?.pol?.official || country.name.common,
    flag: country.flags.svg,
    flagAlt: country.flags.alt,
    map: country.maps.googleMaps,
    languages: country.languages,
    nativeName: nativeCommon,
    population: country.population.toLocaleString(),
    region: country.subregion,
    //currency: country.currencies.name || 'brak',
  };
});
      setCountriesArray(countries);
    });
};

  const viewCountryDetails = (index) =>{
    setSelectedCountry(countriesArray[index]);
    setViewDetails(true);
  }

  useEffect(() =>{
    fetchData();
  },[])

  useEffect(() =>{
  //  console.log(countriesArray);
  })

  useEffect(()=>{
    console.log(selectedCountry)
  },[selectedCountry])

  return (
<>
<SearchBar />
{viewDetails === false ? 
<Dashboard 
countriesArray={countriesArray}
viewCountryDetails={viewCountryDetails}
/> :
<Details 
selectedCountry={selectedCountry}
viewDetails={viewDetails}
setViewDetails={setViewDetails}
/>
}
</>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import SearchBar from './components/SearchBar';

function App() {

 // const [searchTerm, setSearchTerm] = useState('');
  const [countriesArray, setCountriesArray] = useState([]);
  const [fullCountryObject, setFullCountryObject] = useState({});

  const API_URL_ALL = 'https://restcountries.com/v3.1/all';
  //const API_URL_DETAILS = `https://restcountries.com/v3.1/all?fields=${searchTerm}`;

const fetchData = () => {

  fetch(API_URL_ALL)
    .then((response) => response.json())
    .then((countriesArrayAll) => {

    setFullCountryObject(countriesArrayAll[0]);

  const countries = countriesArrayAll.map((country) => {

  const nativeNameObj = country.name.nativeName;
  const nativeCommon = nativeNameObj
    ? Object.values(nativeNameObj)[0]?.common
    : 'brak';

  return {
    countryName: country.translations?.pol?.common || country.name.common,
    countryNameOfficial: country.translations?.pol?.official || country.name.common,
    nativeName: nativeCommon,
    languages: country.languages,
    population: country.population.toLocaleString(),
    capital: country.capital,
    flag: country.flags.svg,
    flagAlt: country.flags.alt,
    coatOfArms: country.coatOfArms.svg,
    coatOfArmsAlt: 'Godło kraju',
    continent: country.continents,
    area: country.area.toLocaleString(),
    region: country.subregion,
    map: country.maps.googleMaps,
    //currency: country.currencies.name || 'brak',
  };
});
      setCountriesArray(countries);
    });
};


  useEffect(() =>{
    fetchData();
  },[])

  useEffect(() =>{
    console.log(countriesArray);
    console.log(fullCountryObject);
  })

  return (
<>
<SearchBar />
<Dashboard countriesArray={countriesArray}/>
</>
  );
}

export default App;

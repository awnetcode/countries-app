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

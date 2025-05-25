import './styles/details.css';

import { Button } from '@mui/material';

const Details = ({selectedCountry, setViewDetails}) => {
  return (
    <>
    <div className="detail-container">
      <div className="flag-container"
      style={{ 
            backgroundImage: `url(${selectedCountry.flag})`,
            backgroundSize:'cover',
            backgroundPosition: 'center'    
            }}></div>
      <div className="details-column">
        <h2>{selectedCountry.countryName}</h2>
        <ul className="detalils-list">
          <li className="detail">Nazwa natywna: {selectedCountry.nativeName}</li>
          <li className="detail">Region: {selectedCountry.region}</li>
          <li className="detail">Stolica: {selectedCountry.capital}</li>
          <li className="detail">Położenie: {selectedCountry.continent.map((continent) =>(continent)).join(', ')}</li>
          <li className="detail">Języki: {Object.keys(selectedCountry.languages).map((language=>(language))).join(', ')}</li>
          <li className="detail map" 
          onClick={()=> window.open(selectedCountry.map, '_blank')}
          >Zobacz na mapie {'>>'}</li>   
        </ul>
      </div>
      <div className="details--column">
        <ul className="details-list">
          <li className="detail">Powierzchnia: {}</li>
          <li className="detail">Populacja: {}</li>
          <li className="detail">{}</li>
          <li className="detail">{}</li>
          <li className="detail">{}</li>
          <li className="detail">{}</li>
        </ul>
      </div>

<Button variant='outlined'
 onClick={()=>setViewDetails(false)}
>powrót</Button>
    </div>
    </>
  )
}

export default Details
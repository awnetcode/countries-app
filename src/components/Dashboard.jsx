
import './styles/dashboard.css';

const Dashboard = ({countriesArray,viewCountryDetails}) => {
  return (
    <div className='dashboard-conntainer'>
      {countriesArray.map((item, index) =>(
        <div className='dashboard-item' 
        key={index}
        onClick={()=>viewCountryDetails(index)}>
          <div className="image-container" style={{ 
            backgroundImage: `url(${item.flag})`,
            backgroundSize:'cover',
            backgroundPosition: 'center'    
            }}>
          </div>
          <div className="dashboard-item-description">
            <h3 className="country-name">{item.countryName}</h3>
            <ul className="dashboard-country-data">
              <li>Populacja: {item.population}</li>
              <li>Kontynent: {item.continent?.[0]}</li>
              <li>Stolica: {item.capital}</li>
            </ul> 
          </div>
          </div>  
    ))}</div>
  )
}

export default Dashboard
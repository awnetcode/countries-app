import React from 'react'

import './styles/dashboard.css';

const Dashboard = ({countriesArray}) => {
    countriesArray.map(() =>(
        countriesArray.countryName
    ))
  return (
    <div className='dashboard-conntainer'>{countriesArray.map((item, index) =>(
        <div className='dashboard-item'>{index } - {item.countryName}</div>
       
    ))}</div>
  )
}

export default Dashboard
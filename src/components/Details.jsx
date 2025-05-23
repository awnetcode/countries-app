import './styles/details.css';

import { Button } from '@mui/material';

const Details = ({selectedCountry, viewDetails, setViewDetails}) => {
  return (
    <>
    <div className="detail-container">

<Button variant='outlined'
 onClick={()=>setViewDetails(false)}
>powrót</Button>
    </div>
    </>
  )
}

export default Details
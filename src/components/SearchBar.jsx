
import { TextField, Select, FormControl, InputLabel, MenuItem } from "@mui/material";

import './styles/searchBar.css';

const SearchBar = ({setSearchTerm, region, setRegion}) => {

  return (
    <div className='search-bar'>
      <TextField 
      id="standard-basic" 
      label="Wyszukaj" 
      variant="outlined" 
      onInput={(e)=> setSearchTerm(e.target.value)}
      sx={{
        cursor:'pointer',
        textAlign:'center'
      }}/>
      <FormControl sx={{
        width:'200px'
      }}>
  <InputLabel id="demo-simple-select-label">Kontynent</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={region}
    label="Age"
    onChange={(event)=>setRegion(event.target.value)}
  >
    <MenuItem value={'Africa'}>Afryka</MenuItem>
    <MenuItem value={'South America'}>Ameryka Południowa</MenuItem>
    <MenuItem value={'North America'}>Ameryka Północna</MenuItem>
    <MenuItem value={'Antarctica'}>Antarktyda</MenuItem>
    <MenuItem value={'Asia'}>Azja</MenuItem>
    <MenuItem value={'Europe'}>Europa</MenuItem>
    <MenuItem value={'Oceania'}>Oceania</MenuItem>
  </Select>
</FormControl>
    </div>
  )
}
export default SearchBar
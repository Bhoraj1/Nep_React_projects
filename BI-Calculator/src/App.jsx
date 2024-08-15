import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const App = () => {
const [p, setP] = useState(0);
const [t, setT] = useState(0);
const [r, setR] = useState(0.);
const [si, setSi] = useState(0);
  
const HandleCalculate = () => {
  setSi(p*t*r/100);
}
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <p className='flex justify-center font-bold'>Simple Interest</p>
          </Typography>
        </Toolbar>
      </AppBar>
      <br></br>
      <div className='flex justify-center gap-3'>
      <TextField onChange={(e) => setP(e.target.value)} id="outlined-basic" label="Enter P" variant="outlined" />
      <TextField onChange={(e) => setT(e.target.value)} id="outlined-basic" label="Enter T" variant="outlined" />
      <TextField onChange={(e) => setR(e.target.value)} id="outlined-basic" label="Enter R" variant="outlined" />
      </div>

      <div className='flex justify-center pt-8'>
      <Button onClick={HandleCalculate} variant="contained">Calculate</Button>
       </div>

       <div className='flex justify-center p-2'>
      <Typography variant="h4" gutterBottom>
      The Simple Interest is:{si}
      </Typography>
      
      </div>
    </div>
  )
}

export default App

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let[error, setError] = useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result ={
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                pressure: jsonResponse.main.pressure,
                weather: jsonResponse.weather[0].description,
                windDeg: jsonResponse.wind.deg,
                windSpeed: jsonResponse.wind.speed,
            }
            return result;
        }catch(err){
            throw err;
        }
    };

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        try{
            setError(false);
            event.preventDefault();
            let newInfo= await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        }catch(err){
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>
            <form className="search-form" onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    sx={{
                        width: { xs: '100%', sm: '300px' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' },
                            '&:hover fieldset': { borderColor: 'white' },
                            '&.Mui-focused fieldset': { borderColor: 'white' }
                        },
                        '& .MuiInputLabel-root': { color: 'white' },
                        '& .MuiInputBase-input': { color: 'white' }
                    }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    sx={{
                        backgroundColor: '#ADEFD1FF',
                        color: '#00203FFF',
                        fontSize: '1.1rem',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        '&:hover': { backgroundColor: '#94e6c1' }
                    }}
                >
                    Get Weather
                </Button>
                {error && <Alert sx={{ width: '100%', mt: 2 }} severity="error">City not found!</Alert>}
            </form>
        </div>
    )
}
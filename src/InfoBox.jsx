import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    const HOT_URL = "https://cdn3.vectorstock.com/i/1000x1000/17/62/weather-symbol-design-vector-8451762.jpg";
    const COLD_URL = "https://img.freepik.com/premium-psd/psd-3d-icon-weather-conditions-with-cold-thermometer-snowflake-weather-forecast-icon-concept_570783-1217.jpg";
    const RAIN_URL = "https://img.freepik.com/premium-vector/weather-forecast-icon-clouds-rain-thunder_739746-66.jpg";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card className="weather-card">
            <CardMedia
              sx={{ height: 200 }}
              image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
              title="weather status"
            />
        <CardContent>
        <Typography variant="h4" component="div" sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {info.city}
          <span style={{ marginLeft: '0.5rem' }}>
            {info.humidity > 80 ? <ThunderstormIcon fontSize="large"/> : 
             info.temp > 15 ? <SunnyIcon fontSize="large"/> : <AcUnitIcon fontSize="large"/>}
          </span>
        </Typography>
        <div className="weather-details">
          <div>
            <Typography variant="h6">Current Temp</Typography>
            <Typography variant="h4">{info.temp}°C</Typography>
          </div>
          <div>
            <Typography variant="h6">Feels Like</Typography>
            <Typography variant="h4">{info.feelsLike}°C</Typography>
          </div>
          <div>
            <Typography variant="h6">Humidity</Typography>
            <Typography variant="h4">{info.humidity}%</Typography>
          </div>
          <div>
            <Typography variant="h6">Wind Speed</Typography>
            <Typography variant="h4">{info.windSpeed} m/s</Typography>
          </div>
        </div>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }} component={"div"}>
          <p>Min Temp: {info.tempMin}°C | Max Temp: {info.tempMax}°C</p>
          <p>Pressure: {info.pressure} hPa | Wind Degree: {info.windDeg}°</p>
          <p>Condition: <b>{info.weather}</b></p>
        </Typography>
      </CardContent>
      </Card>
      </div>
        </div>
    )
}
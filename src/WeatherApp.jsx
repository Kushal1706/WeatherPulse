import { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import Typography from '@mui/material/Typography';

const BACKGROUNDS = {
  hot: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  cold: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  rainy: 'https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  default: 'https://png.pngtree.com/thumb_back/fh260/background/20231221/pngtree-blue-technological-mesh-light-sensitive-particle-background-image_15546869.png'
};

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: 'Bengaluru',
    temp: 31.00,
    feelsLike: 32.06,
    humidity: 45,
    pressure: 1005,
    tempMax: 31.94,
    tempMin: 30.06,
    weather: "scattered clouds",
    windDeg: 180,
    windSpeed: 2.06,
  });

  useEffect(() => {
    const setBackground = () => {
      let bgUrl;
      if (weatherInfo.humidity > 80) {
        bgUrl = BACKGROUNDS.rainy;
      } else if (weatherInfo.temp > 25) {
        bgUrl = BACKGROUNDS.hot;
      } else if (weatherInfo.temp <= 15) {
        bgUrl = BACKGROUNDS.cold;
      } else {
        bgUrl = BACKGROUNDS.default;
      }

      document.documentElement.style.backgroundImage = 
        `linear-gradient(rgba(0, 32, 63, 0.7), rgba(0, 32, 63, 0.7)), url("${bgUrl}")`;
    };

    setBackground();
  }, [weatherInfo]);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ 
      textAlign: "center",
      padding: '2rem 1rem',
      minHeight: '100vh'
    }}>
      <Typography variant="h2" sx={{ 
        mb: 4,
        fontWeight: 'bold',
        color: '#ADEFD1FF',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
      }}>
        Weather Pulse
      </Typography>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
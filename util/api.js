const apiKey = 'a2de8a67a5f75889a6c5bf573eeb70b7';

export const getWeather = async (cityName) => {
  //   console.log(cityName);
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=it&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if (response.status == 200) {
      //   console.log(data);

      return {
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        tempo_max: data.main.temp_max,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: '',
      };
    } else {
      return {
        error: data.message,
      };
    }
  } catch (e) {
    console.error(e);
    return {
      error: JSON.stringify(e),
    };
  }
};

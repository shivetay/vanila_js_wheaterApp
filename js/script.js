'use strict';

{
  const appInit = function() {
    const apiKey = 'aba77bdfede6c34d4257aceb705b1452';
    // get dom elements
    const searchButton = document.getElementById('getWheater');
    const cityInput = document.getElementById('cityInput');
    const resultDisplay = document.getElementById('wheaterSection');

    const fetchCity = (key, cityName) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`
      )
        .then(res => res.json())
        .then(data => {
          renderElements(data);
        });
    };

    const renderElements = data => {
      const createDiv = document.createElement('div');
      createDiv.innerHTML = `
      <div class="wheater__header">
          <h3>Weather for ${data.name}</h3>
        </div>
        <div class="wheater__display">
          <div class="wheater__display-details">
            <p>temp: 36</p>
            <p>preasure: 1000hpa</p>
            <p>humidity: 50%</p>
          </div>
          <div class="wheater__display-icon">
            <span>
            <img src="http://openweathermap.org/img/wn/${
              getIcon(data.weather).newIcon
            }.png" alt="weather_icon">
            </span>
            <p>${getIcon(data.weather).newDescription}</p>
          </div>
        </div>`;
      resultDisplay.appendChild(createDiv);
    };

    const getIcon = iconData => {
      let newIcon;
      let newDescription;
      for (let weather of iconData) {
        newIcon = weather.icon;
        newDescription = weather.description;
      }
      return { newIcon, newDescription };
    };

    searchButton.addEventListener('click', function() {
      const city = cityInput.value;
      fetchCity(apiKey, city);
      cityInput.value = '';
    });
  };

  appInit();
}

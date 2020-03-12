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
      <div>
        <div>Wheater for ${data.name} </div>
        <div>
          
        </div>

      </div>`;
      resultDisplay.appendChild(createDiv);
    };

    searchButton.addEventListener('click', function() {
      const city = cityInput.value;
      // fetchCity(apiKey, city);
    });
  };

  appInit();
}

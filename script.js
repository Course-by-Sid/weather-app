window.addEventListener('load', () => {
    const locationElement = document.getElementById('location');
    const iconElement = document.getElementById('icon');
    const descriptionElement = document.getElementById('description');
    const tempElement = document.getElementById('temp');
    const unitElement = document.getElementById('unit');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        const city = searchInput.value;
        if (city.trim() !== '') {
            getWeatherData(city);
        }
    });

    function getWeatherData(city) {
        var _0xb9fe=["\x65\x65\x30\x62\x33\x64\x30\x32\x35\x61\x61\x35\x64\x39\x38\x35\x34\x32\x62\x35\x39\x36\x33\x31\x30\x63\x36\x34\x62\x36\x64\x66"];const apiKey=_0xb9fe[0]

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            descriptionElement.textContent = data.weather[0].description;
            tempElement.textContent = Math.round(data.main.temp - 273.15);
            iconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
    }

});

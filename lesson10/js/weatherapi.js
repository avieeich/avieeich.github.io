const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=eb2afd8bdd68cf1db8f496b787a6d403'

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const currentTemp=document.querySelector('#current-temp');
    
    currentTemp.textContent = jsObject.main.temp;
    const imagesrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute ('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
});
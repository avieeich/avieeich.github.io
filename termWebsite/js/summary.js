const apiURLS = 'https://api.openweathermap.org/data/2.5/weather?q=Riggins,us&units=imperial&APPID=eb2afd8bdd68cf1db8f496b787a6d403'

fetch(apiURLS)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = "Currently: " + jsObject.weather[0].description;
    document.getElementById('temperature').textContent="Temp: " + jsObject.main.temp;
    document.getElementById('high').textContent="High: " + jsObject.main.temp_max;
    document.getElementById('windSpeed').textContent="WindSpeed: " + jsObject.wind.speed;

    var t = jsObject.main.temp;
var s= jsObject.wind.speed;
if (t<=50 && s>3){
var f= Math.round(35.74 + 0.6215*t-35.75*Math.pow(s,0.16)+0.4275*t*Math.pow(s,0.16));
document.getElementById('windchill').innerHTML=f;
}
else{
    document.getElementById('windchill-p').style.display="none";
}

});


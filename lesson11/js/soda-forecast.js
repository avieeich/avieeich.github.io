const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=eb2afd8bdd68cf1db8f496b787a6d403'
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    
    
    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    let iconsrc= fivedayforecast[0].weather[0].icon;
    for (let i=0; i<fivedayforecast.length; i++) {
        iconsrc= fivedayforecast[i].weather[0].icon;
        document.getElementById(`forecast${i+1}`).textContent = fivedayforecast[i].main.temp;
        document.getElementById(`icon${i+1}`).setAttribute('src', `http://openweathermap.org/img/wn/${iconsrc}@2x.png`);
    }
});

const option={weekday:'long'};
d= new Date()
w= d.getDay();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let c=w
for (let i=0; i<5; i++){
    document.getElementById(`day${i+1}`).textContent= weekday[c];
    if(c==6){
        c=c-6;
    }
    else{
        c=c+1;
    }
}
 


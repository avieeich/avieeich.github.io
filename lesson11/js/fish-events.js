const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    for (let i=0; i<4; i++){
    document.getElementById(`event${i+1}`).textContent = jsObject.towns[2].events[i];
    }
});
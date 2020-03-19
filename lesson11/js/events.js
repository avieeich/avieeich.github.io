const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    for (let i=0; i<3; i++){
    document.getElementById(`event${i+1}`).textContent = jsObject.towns[1].events[i];
    }
});
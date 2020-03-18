const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
        let card = document.createElement('section');


//Fish Haven
let h2 = document.createElement('h2');
h2.textContent = towns[2].name + ' ';
card.appendChild(h2);
document.querySelector('div.cards').appendChild(card);

let motto = document.createElement('h3');
motto.textContent = towns[2].motto;
card.appendChild(motto);
document.querySelector('div.cards').appendChild(card);

let yearFounded = document.createElement('p');
yearFounded.textContent = 'Founded: ' + towns[2].yearFounded;
card.appendChild(yearFounded);
document.querySelector('div.cards').appendChild(card);

let currentPopulation = document.createElement('p');
currentPopulation.textContent = 'Population: ' + towns[2].currentPopulation;
card.appendChild(currentPopulation);
document.querySelector('div.cards').appendChild(card);

let averageRainfall = document.createElement('p');
averageRainfall.textContent = 'Average Rainfall: ' + towns[2].averageRainfall;
card.appendChild(averageRainfall);
document.querySelector('div.cards').appendChild(card);

let image = document.createElement('img');
image.setAttribute('src', towns[2].photo);
image.setAttribute('alt', towns[2].name);
card.appendChild(image);
document.querySelector('div.cards').appendChild(card);


//Soda Springs
card = document.createElement('section');

let h2S = document.createElement('h2');
h2S.textContent = towns[5].name + ' ';
card.appendChild(h2S);
document.querySelector('div.Scards').appendChild(card);

let mottoS = document.createElement('h3');
mottoS.textContent = towns[5].motto;
card.appendChild(mottoS);
document.querySelector('div.cards').appendChild(card);

let yearFoundedS = document.createElement('p');
yearFoundedS.textContent = 'Founded: ' + towns[5].yearFounded;
card.appendChild(yearFoundedS);
document.querySelector('div.cards').appendChild(card);

let currentPopulationS = document.createElement('p');
currentPopulationS.textContent = 'Population: ' + towns[5].currentPopulation;
card.appendChild(currentPopulationS);
document.querySelector('div.cards').appendChild(card);

let averageRainfallS = document.createElement('p');
averageRainfallS.textContent = 'Average Rainfall: ' + towns[5].averageRainfall;
card.appendChild(averageRainfallS);
document.querySelector('div.cards').appendChild(card);

let imageS = document.createElement('img');
imageS.setAttribute('src', towns[5].photo);
imageS.setAttribute('alt', towns[5].name);
card.appendChild(imageS);
document.querySelector('div.cards').appendChild(card);

//Preston
card = document.createElement('section');


let h2F = document.createElement('h2');
h2F.textContent = towns[0].name + ' ';
card.appendChild(h2F);
document.querySelector('div.cards').appendChild(card);

let mottoF = document.createElement('h3');
mottoF.textContent = towns[0].motto;
card.appendChild(mottoF);
document.querySelector('div.cards').appendChild(card);

let yearFoundedF = document.createElement('p');
yearFoundedF.textContent = 'Founded: ' + towns[0].yearFounded;
card.appendChild(yearFoundedF);
document.querySelector('div.cards').appendChild(card);

let currentPopulationF = document.createElement('p');
currentPopulationF.textContent = 'Population: ' + towns[0].currentPopulation;
card.appendChild(currentPopulationF);
document.querySelector('div.cards').appendChild(card);

let averageRainfallF = document.createElement('p');
averageRainfallF.textContent = 'Average Rainfall: ' + towns[0].averageRainfall;
card.appendChild(averageRainfallF);
document.querySelector('div.cards').appendChild(card);

let imageF = document.createElement('img');
imageF.setAttribute('src', towns[0].photo);
imageF.setAttribute('alt', towns[0].name);
card.appendChild(imageF);
document.querySelector('div.cards').appendChild(card);
  });


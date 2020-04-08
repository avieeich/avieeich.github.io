const requestURL = 'json/guides.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const guides = jsonObject['guides'];
    for (let i = 0; i < guides.length; i++ ) {
        let card = document.createElement('section');

let h2 = document.createElement('h3');
h2.textContent = guides[i].name + ' ' + guides[i].lastname;
card.appendChild(h2);
document.querySelector('div.cards').appendChild(card);

let image = document.createElement('img');
image.setAttribute('src', guides[i].image);
image.setAttribute('alt', guides[i].name + guides[i].lastname + '-' + guides[i].order)
card.appendChild(image);

let certification = document.createElement('p');
certification.textContent = 'Certification: ' + guides[i].certification;
card.appendChild(certification);
document.querySelector('div.cards').appendChild(card);

let experience = document.createElement('p');
experience.textContent = 'Experience: ' + guides[i].experience;
card.appendChild(experience);
document.querySelector('div.cards').appendChild(card);

let emailAddress = document.createElement('p');
emailAddress.textContent = 'Email: ' + guides[i].email;
card.appendChild(emailAddress);
document.querySelector('div.cards').appendChild(card);

let biography = document.createElement('p');
biography.textContent = guides[i].biography;
card.appendChild(biography);
document.querySelector('div.cards').appendChild(card);


document.querySelector('div.cards').appendChild(card);
    }
  });


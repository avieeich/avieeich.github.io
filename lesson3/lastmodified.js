document.getElementById('lastmodified').textContent= new Date(document.lastModified).toLocaleDateString('en-us');
const options={year:"numeric"};
 document.getElementById('year').textContent= new Date().toLocaleDateString('en-us', options);
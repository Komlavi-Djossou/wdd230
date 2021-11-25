const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8ac64954da8de0972eba9f0d65c23ef6'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-temp').textContent = jsObject.list[0].main.temp.toFixed(0);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
    const desc = jsObject.weather[0].description;  
    document.getElementById('imagesrc').textContent = imagesrc;  
    document.getElementById('icon').setAttribute('src', imagesrc); 
    document.getElementById('icon').setAttribute('alt', desc);

});
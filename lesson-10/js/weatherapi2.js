const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=bfec02243921903c293dcb0c1b72d77d&units=imperial'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.list[0].weather[0].main;
    temp = jsObject.list[0].main.temp;
    document.getElementById('temp').textContent = temp;
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
    document.getElementById('windspeed').textContent = jsObject.list[0].wind.speed;
    
    let forecast = jsObject['list'];
    for (let i of [6, 14, 22, 30, 38]) {
      // if (forecast[i].dt_txt.includes("18:00:00")){
        let td = document.createElement('td');
        let img = document.createElement('img');
        let high = document.createElement('span');
        const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';  
        const desc = forecast[i].weather[0].description;  
        
        img.setAttribute('src', imagesrc);
        img.setAttribute('alt', desc);
        high.innerHTML = `${forecast[i].main.temp.toFixed(0)}&deg;F`;

        td.appendChild(img);
        td.appendChild(high);

        document.querySelector('tr.forecast-td').appendChild(td);
    }
  });

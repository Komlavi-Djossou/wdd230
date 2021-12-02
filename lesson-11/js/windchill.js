const api = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=8ac64954da8de0972eba9f0d65c23ef6&units=imperial'

fetch(api)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let windspeed = jsObject.list[0].wind.speed;
    let temp = jsObject.list[0].main.temp;

    if (temp <= 50 && windspeed > 3){
    let wc = 35.74 + 0.6215 * temp - 35.75 * (windspeed ** 0.16) + 0.4275 * temp * (windspeed ** 0.16);
    let ws = wc.toFixed(1);
    document.getElementById("windchill").innerHTML = `${ws}&deg;F`;
    }
    else{
        document.querySelector("#windchill").innerHTML = "n/a";
    }
});
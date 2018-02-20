/*Andrei Pestovski
Date: 2/18/2018
Description: asynchronous GET request javasript for the Ajax/forms assignment
*/

var req = new XMLHttpRequest();
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
        document.getElementById('urlSubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var payload = {location: null, temperature:null, windSpeed: null, humidity:null};
    payload.cityName = document.getElementById('cityName').value;
    req.open('GET', "http://api.openweathermap.org/data/2.5/weather?q=" + payload.cityName +",us&appid=fa7d80c48643dfadde2cced1b1be6ca1", true);
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        console.log(response);
          document.getElementById('city').textContent = response.name;
          document.getElementById('temp').textContent = response.main.temp;
          document.getElementById('windSpeed').textContent = response.wind.speed;
          document.getElementById('humidity').textContent = response.main.humidity + "%";
      } else {
        console.log("Error in network request: " + req.statusText);
      }});
    req.send(JSON.stringify(payload));
    event.preventDefault();
  })};

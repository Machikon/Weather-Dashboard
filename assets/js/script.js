var apiKey = "117ee126a082693cf3f030ee7ea96dde";
var city = document.getElementById("city-input");
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q="city" + "&appid=" + "117ee126a082693cf3f030ee7ea96dde';
var forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?id=" + city.value + "&appid=" + apiKey + "&units=imperial"';
var fetchBtn = document.querySelector('.btn');
var repoList = document.querySelector('ul');
var icon = document.querySelector('weather-icon');
var temp = document.querySelector('#temp');
var unit = "imperial"

var citySearchEl = document.querySelector('#city-search');
var cityListEl = document.querySelector('#city-list');
var cityName = document.querySelector('#cityName');
var humidity = document.querySelector('#humidity');
var windSpeed = document.querySelector('#windSpeed');
var date = document.querySelector('#date');




// create function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

// select form element by its `name` attribute and get its value
var cityEntered = $('input[name="city-input"]').val();

// if there's nothing in the form entered, don't print to the page
if(cityEntered){
    console.log('Please enter a city!');
    return;
}


// print to the page
cityListEl.append('<li>' + cityEntered + '</li>');

// clear the form input element
$('input[name="city-input"]').val('');


window.localStorage.setItem("city", JSON.stringify(cityName));
getApi(cityEntered)
}

var saveCity = localStorage.getItem("cityName");

// city as your parameter here 
function getApi(e){
    e.preventDefault();
    console.log("getAPI")
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + apiKey + "&units=imperial"; 
    
    
    // var forecastQueryURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + city.value + "&appid=" + apiKey + "&units=imperial";
   
    

    fetch(queryURL)
    .then(function (response){
        return response.json();
    })
.then(function (data){
    cityName.textContent = data.name 
    temp.textContent = "Temp: " + data.main.temp + "F"
    windSpeed.textContent = "Wind Speed:" + data.wind.speed + "MPH"
    humidity.textContent = "Humidity:" + data.main.humidity + "%"
    var time = data.dt
    date.textContent = moment.unix(time).format("MM-DD-YYYY")

   
    console.log(time)
    console.log(moment.unix(time).format("MM-DD-YYYY"))
    console.log(data.name);
    console.log(data);
    console.log(data.wind.speed);
    console.log(data.main.temp);
    console.log(data.main.humidity);


});

}

//fetch request gets a list of temp, wind, and humidity data
fetchBtn.addEventListener('click', function(e){
    getApi(e)
});


// For 5-day forecast - city as your parameter here 
// function getApi(e){
//     e.preventDefault();
// //     console.log("getAPI") 
    
//     var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + city.value + "&appid=" + apiKey + "&units=imperial";
       
// // for(var i=0; i<5; i++){
// //     var forecast = $('input[name="city-input"]').val('');
// // }

//    return fetch(forecastURL)
//     .then(function (response){
//         return response.json();
//     })
// .then(function (data){
    
//     temp.textContent = "Temp: " + data.main.temp + "F"
//     windSpeed.textContent = "Wind Speed:" + data.wind.speed + "MPH"
//     humidity.textContent = "Humidity:" + data.main.humidity + "%"
//     var time = data.dt
//     date.textContent = moment.unix(time).format("MM-DD-YYYY")

   
//     console.log(time)
//     console.log(moment.unix(time).format("MM-DD-YYYY"))
//     console.log(data.name);
//     console.log(data);
//     console.log(data.wind.speed);
//     console.log(data.main.temp);
//     console.log(data.main.humidity);


// });


















//OpenWeather key
//117ee126a082693cf3f030ee7ea96dde

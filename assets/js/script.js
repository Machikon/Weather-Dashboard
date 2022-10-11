var apiKey = "117ee126a082693cf3f030ee7ea96dde";
var city= [];
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q="city" + "&appid=" + "117ee126a082693cf3f030ee7ea96dde';
var fetchBtn = document.querySelector('btn');
var repoList = document.querySelector('ul');
var icon = document.querySelector('weather-icon');
var tempEl = document.querySelector('temperature-value p');
var unit = "imperial"

var citySearchEl = document.querySelector('#city-search');
var cityListEl = document.querySelector('#city-list');


// var weather ={
//     temperature:{
//         value: 60
//         unit:"imperial"
//     },
//     humidity:"10",
//     iconID: "".charAt
//     city:"",
//     country:""
// };




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
}



function getApi(){
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey +"&units=imperial";  

   
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    fetch(queryURL)
    .then(function (response){
        return response.json();
    })
.then(function (data){
    for (var i = 0; i < data.length; i++) {
    repoList.textContent = data[i].html_url;
    repoList.appendChild(repoList);    
    }
});

}

//fetch request gets a list of temp, wind, and humidity data
fetchBtn.addEventListener('click',getApi);



// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}









//OpenWeather key
//117ee126a082693cf3f030ee7ea96dde

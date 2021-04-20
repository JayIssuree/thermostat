$(document).ready(function () {
  var thermostat = new Thermostat();
  $("#temperature").text(thermostat.temperature);

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $("#weather_api_location").text(data.name);
      $("#weather_api_temperature").text(data.main.temp);
    })
  }

  function updateTemperature(){
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr('class', thermostat.energyUsage());
  }

  $("#temperature-up").on("click", function () {
    thermostat.up();
    updateTemperature();
  });

  $("#temperature-down").on("click", function () {
    thermostat.down();
    updateTemperature();
  });

  $('#powersaving-on').on("click", function(){
      thermostat.turnOnPSM();
      $('#power-saving-status').text('on')
      updateTemperature();
  })

  $('#powersaving-off').on("click", function(){
    thermostat.turnOffPSM();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  $('#temperature-reset').on("click", function(){
      thermostat.resetTemperature();
      updateTemperature();
  })

  $("#current-city").on("change", function(){
    var city = $('#current-city').val();
    displayWeather(city)
  })


});

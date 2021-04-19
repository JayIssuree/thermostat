$(document).ready(function () {
  var thermostat = new Thermostat();
  $("#temperature").text(thermostat.temperature);

  function updateTemperature(){
    $("#temperature").text(thermostat.temperature);
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


});

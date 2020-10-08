var request = new XMLHttpRequest()

request.open('GET', 'api.openweathermap.org/data/2.5/weather?q=Potchefstroom&units=metric&appid=7b74c81b3a1b7e9f8b0aa99bbaa4e6b3',true)

request.onload = function()
{
  
  var data = JSON.parse(this.response);

  var weatherstatistics = '';

  $.each(data, function(i, status)
  {
    weatherstatistics += '<tr>';
    
    weatherstatistics += '<td>' + status.temp_min + '</td>';
    weatherstatistics += '<td>' + status.temp_max + '</td>';
    
    weatherstatistics += '</tr>';
    
  });

  $('tbody').html(weatherstatistics)

}

request.send();
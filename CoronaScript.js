var request = new XMLHttpRequest()

request.open('GET', 'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats',true)

request.onload = function()
{
  var data = JSON.parse(this.response);

  var statistics = '';

  $.each(data, function(i, status)
  {
    statistics += '<tr>';
    
    statistics += '<td>' + status.currently_infected + '</td>';
    statistics += '<td>' + status.total_cases + '</td>';
    
    statistics += '</tr>';
    
  });

  $('tbody').html(statistics)

}

request.send();
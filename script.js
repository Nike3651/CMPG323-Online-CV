function WeatherFunction()
{
    document.getElementById("Weather");
    var Weather = new XMLHttpRequest()
    Weather.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Potchefstroom&units=metric&appid=7b74c81b3a1b7e9f8b0aa99bbaa4e6b3',true)

    Weather.onload = function()
    {
        var data = JSON.parse(this.response);
        var weatherstatistics = '';

        $.each(data, function(i, status)
        {
            weatherstatistics += '<tr>'; 
            weatherstatistics += '<td>' + status.temp + '</td>'; 
            weatherstatistics += '</tr>';
        });
        $('tbody').html(weatherstatistics)
    }
    Weather.send();
} 

function CoronaFunction()
{
    document.getElementById("Corona");
    var Corona = new XMLHttpRequest()
    Corona.open('GET', 'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats',true)

    Corona.onload = function()
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
    Corona.send();
}




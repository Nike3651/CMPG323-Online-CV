function fetchStats()
{
    fetch("https://public-api.tracker.gg/v2/apex/standard/profile/origin/Nike3651")
    .then((response) => response.json())
    .then((level) => console.log(level));
}

function renderStats()
{
    console.log(level);
}
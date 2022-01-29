const drawRegionsMap = () => {
    const data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ]);

    const options = {
        colorAxis: {colors: ['#b4dae3', 'white', '#05a4c8']},
    };

    const chart = new google.visualization.GeoChart(document.getElementById('map'));

    chart.draw(data, options);
}

google.charts.load('current', {
    'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

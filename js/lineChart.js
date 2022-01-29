const drawChart = () => {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Sales', 'Expenses'],
        ['Jan',  1000,      400],
        ['Feb',  1170,      460],
        ['Mar',  660,       1120],
        ['Apr',  1030,      540],
        ['May',  1000,      400],
        ['Jun',  1170,      460],
        ['Jul',  660,       1120],
        ['Aug',  1030,      540],
        ['Sep',  1170,      460],
        ['Oct',  660,       1120],
        ['Nov',  1030,      540],
        ['Dec',  1030,      540]
    ]);

    const options = {
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    // Here we have to pass an ID ov div where we want to append a chart.
    const chart = new google.visualization.LineChart(document.getElementById('line-chart'));

    chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Product', 'Sales'],
        ['TV',     9],
        ['Xbox',      3],
        ['Playstation',  3],
        ['Iphone', 6],
        ['MacBook',    3]
    ]);

    var options = {
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    chart.draw(data, options);
}

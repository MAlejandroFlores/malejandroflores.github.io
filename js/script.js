var today = new Date();

var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var legend = "Last Updated " + String(date) + '  ' + String(time);

var date_html = document.getElementById("current_date");
date_html.innerHTML = legend;
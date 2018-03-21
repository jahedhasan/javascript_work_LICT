


var friends = ['jahed', 'hasan', 'joy', 'aziz', 'noman'];
var html = '<ul>';
for (var i = 0; i<friends.length; i++) {
	html = html + '<li>' + friends[i] + '</li>'
}
html = html + '</ul>';

var div = document.getElementById('Div');
div.innerHTML = html;

// to select button 
var button = document.querySelector('button');

var colors = ['red', 'teal','gray', 'blue', 'green'];

//one way function call

// function changeColor(){
// 	document.body.style.backgroundColor = colors[parseInt(Math.random()* colors.length)];
// }

// button.addEventListener('click', changeColor);

//another way
// to listen to button click 
button.addEventListener('click', function(){
	var randomNumber= parseInt(Math.random()*colors.length);
	var randomColor= colors[randomNumber];
	document.body.style.backgroundColor = randomColor;
});



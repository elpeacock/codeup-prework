"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var yourname = "";

	while (yourname === "") {
		yourname = prompt ("Hello, what is your name?");
	}

// TODO: Show an alert message that welcomes the user based on their input.
alert ("Welcome " + yourname + "!");
// TODO: Ask the user if they like pizza.
var pizza = confirm (yourname + ", do you like pizza?");
//       Based on their answer show a creative alert message.
if (pizza) {
	alert ("The Teenage Mutant Ninja Turtles' favorite food is pizza. Cowabunga dude!");
} else {
	alert ("A friend of mine doesn't like pizza either.")
}
/**
* Says Hello World with a param, a record and an array.
*/
function sayHelloWorld(){

	var result = resultToJSON()
	var greeting = "Hello World"
	result.greeting = greeting
	result.nested_greeting = { "greeting": greeting }
	result.greetings = [ result.nested_greeting ]
	return result
}
sayHelloWorld()

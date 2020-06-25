var Param = com.konylabs.middleware.dataobject.Param
var Record = com.konylabs.middleware.dataobject.Record
var Dataset = com.konylabs.middleware.dataobject.Dataset

/**
* Says Hello World with a param, a record and an array.
*/
function sayHelloWorld(){

	//Create the attribute to say hello world.
	var greetParam = new Param(
		"greeting",
		"Hello World",
		"string"
	)

	//Add an attribute to the result.
	result.addParam(greetParam)

	//Add an attribute to a nested object.
	var greetRec = new Record()
	greetRec.setID("nested_greeting")
	greetRec.addParam(greetParam)
	result.addRecord(greetRec)

	//Add an object to a nested array.
	var greetingsDs = new Dataset("greetings")
	greetingsDs.addRecord(greetRec)

	//Add the array to the result.
	result.setDataSet(greetingsDs)
}
sayHelloWorld()

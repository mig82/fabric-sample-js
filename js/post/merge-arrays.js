function mergeArrays(arrayA, arrayB, finalArray){
	var result = resultToJSON()

	//Get the original two arrays.
	var a = result[arrayA] || []
	var b = result[arrayB] || []

	//Add the type for each.
	a.forEach(function(record){record.type = arrayA})
	b.forEach(function(record){record.type = arrayB})

	//Create the new array and add all the items from the original two.
	result[finalArray] = a.concat(b)

	//Remove the original arrays.
	delete result[arrayA]
	delete result[arrayB]

	return result
}
mergeArrays("foo", "bar", "qux")

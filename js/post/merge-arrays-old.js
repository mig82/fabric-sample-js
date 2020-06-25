var Dataset = com.konylabs.middleware.dataobject.Dataset;
var ArrayList = java.util.ArrayList;

function mergeArrays(arrayA, arrayB, finalArray){

	//Get the original two arrays.
	var aRecords = result.findDataset(arrayA)?result.findDataset(arrayA).getAllRecords():new ArrayList()
	var bRecords = result.findDataset(arrayB)?result.findDataset(arrayB).getAllRecords():new ArrayList()

	//Add the type for each.
	aRecords.forEach(function(record){record.addParam("type", arrayA, "string")})
	bRecords.forEach(function(record){record.addParam("type", arrayB, "string")})

	//Create the new array and add all the items from the original two.
	var fDs = new Dataset(finalArray)
	fDs.addAllRecords(aRecords)
	fDs.addAllRecords(bRecords)

	//Remove the original arrays.
	result.setDataSets(new ArrayList())

	//Add the new array to the result.
	result.setDataSet(fDs)
}
mergeArrays("foo", "bar", "qux")

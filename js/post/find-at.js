var ArrayList = java.util.ArrayList;

/**
* Given a result with an array, transforms the result to be the first element in the array.
*/
function findAt(arrayName, recordName, index){

	var recordsDs = result.findDataset(arrayName);

	if(recordsDs && recordsDs.getRecords().length > 0 && index < recordsDs.getRecords().length){

		//Get the object at index in the array.
		var record = recordsDs.getRecord(index);
		record.setID(recordName);

		//Add the first object directly to the result.
		result.setRecord(record);

		//Remove the array.
		result.setDataSets(new ArrayList());
	}

}

findAt("cards", "card", 3);

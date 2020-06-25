var ArrayList = java.util.ArrayList;

/**
* Given a result with an array, transforms the result to be the first element in the array.
*/
function respondWithFirst(arrayName, recordName){

	var recordsDs = result.findDataset(arrayName);

	if(recordsDs && recordsDs.getRecords().length > 0){

		//Get the first object in the array.
		var record = recordsDs.getRecord(0);
		record.setID(recordName);

		//Add the first object directly to the result.
		result.setRecord(record);

		//Remove the array.
		result.setDataSets(new ArrayList());
	}

}

respondWithFirst("cards", "card");

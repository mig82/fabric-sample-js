/**
* Given a result with an array, respond with the first record
* in the array where propName matches propValue —e.g. Given:
*
* {
*	"rolling_stones": [{
*		"name": "Keith Richards",
*		"id": "1",
*		"instrument": "guitar"
*	}, {
*		"name": "Charlie Watts",
*		"id": "3",
*		"instrument": "drums"
*	}, {
*		"name": "Ronnie Wood",
*		"id": "2",
*		"instrument": "guitar"
*	}, {
*		"name": "Mick Jagger",
*		"id": "4",
*		"instrument": "vocals"
*	}]
*}
*
* Respond with:
*   {
*     "drummer": {
*       "name": "Charlie Watts",
*       "instrument": "drums",
*       "id": "3"
*     }
*   }
*/
var ArrayList = java.util.ArrayList;

function findMatching(arrayName, recordName, propName, propValue){

	var recordsDs = result.findDataset(arrayName);

	if(recordsDs && recordsDs.getRecords().length > 0){

		//Get the array from the Dataset.
		var records = recordsDs.getAllRecords();

		for (var i = records.length - 1; i >= 0; i--) {
			var record = records[i];
			var param = record.getParam(propName)
			if(param && param.getValue() === propValue){
				record.setID(recordName);
				//Add the object directly to the result.
				result.setRecord(record);
				break;
			}
		};

		//Remove the array.
		result.setDataSets(new ArrayList());
	}

}

findMatching("rolling_stones", "drummer", "instrument", "drums");

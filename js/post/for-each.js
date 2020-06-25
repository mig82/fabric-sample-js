var Param = com.konylabs.middleware.dataobject.Param;
var Record = com.konylabs.middleware.dataobject.Record;
var Dataset = com.konylabs.middleware.dataobject.Dataset;
var ArrayList = java.util.ArrayList;

/**
* Applies a function to each element in an array.
*/
function forEach(arrayName, func){

	var arrayDs = result.findDataset(arrayName);

	if(arrayDs && arrayDs.getRecords().length > 0 && typeof func === "function"){

		var records = arrayDs.getRecords();

		for (var i = records.length - 1; i >= 0; i--) {
			func(records[i], i, records)
		}

	}
}

forEach("things", function(current, index, array){
	//Logic goes here.
});

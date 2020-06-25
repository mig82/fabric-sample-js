var Param = com.konylabs.middleware.dataobject.Param;

/**
* Given a response with an array, adds the length of that array as an
* attribute to the result.
*/

function calcLength(arrayName, countAttr){

	var arrayDs = result.findDataset(arrayName);
	result.addParam(new Param(
		countAttr,
		arrayDs?arrayDs.getRecords().length:0,
		"number"
	));
}
calcLength("foo_records", "foo_count");
calcLength("bar_records", "bar_count");

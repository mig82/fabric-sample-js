/**
* Transforms the input parameter string "true" to bollean true
* and the string "false" to boolean false.
*/
function stringToBoolean(paramId) {

	var param = serviceInputParams.get(paramId)
	param = param?param.trim():""

	if(param === "true"){
		serviceInputParams.put(paramId, true)
	}
	else if(param === "false"){
		serviceInputParams.put(paramId, false)
	}
	return true
}
stringToBoolean("foo")
stringToBoolean("bar")

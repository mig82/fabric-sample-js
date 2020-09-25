var Param = com.konylabs.middleware.dataobject.Param

/**
* Takes an input parameter by name and places it in the output.
*/
function echo(name, type, defaultValue){

	if(typeof name === "undefined") return
	//Add the input to the output.
	result.addParam(new Param(
		name,
		request.getParameter(name) || defaultValue,
		type || "string"
	))
}
echo("id")
//echo("id", "string", "")
//echo("id2", "number", 0.1)
//echo("id3", "number", 0.1)
//echo("id4", "number", 0)
//echo("id5", "boolean", true)

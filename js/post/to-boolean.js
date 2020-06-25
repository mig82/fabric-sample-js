/**
* Converts an existing parameter to boolean type.
*/
function toBoolean(param){
	if(param) param.setType('boolean');
}
toBoolean(result.getParamByName("foo"));

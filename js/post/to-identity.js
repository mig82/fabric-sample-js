var Param = com.konylabs.middleware.dataobject.Param;
var Record = com.konylabs.middleware.dataobject.Record;
var ArrayList = java.util.ArrayList;

/**
* Tranforms the backend response in order to build the 'security_attributes' and 'user_attributes' that the
* interface for custom identity services requires in order to work.
*/
function addSecAttributes(result, token){

	var secAttrs = new Record();
	secAttrs.setId('security_attributes');
	secAttrs.setParam(new Param('session_token', token));
	result.setRecord(secAttrs);
}

function addUserAttributes(result, userId, login, email, sub){

	var userAttrs = new Record();
	userAttrs.setId('user_attributes');
	userAttrs.setParam(new Param('user_id', userId));
	userAttrs.setParam(new Param('login', login));
	userAttrs.setParam(new Param('email', email));
	userAttrs.setParam(new Param('sub_id', sub));
	result.setRecord(userAttrs);
}

function toIdentity(tokenParam, userParam, subjectParam){

	addSecAttributes(
		result,
		result.getParamByName(tokenParam).getValue()
	);

	addUserAttributes(
		result,
		result.getParamByName(userParam).getValue(),
		result.getParamByName(userParam).getValue(),
		result.getParamByName(userParam).getValue(),
		subjectParam
	);
}
toIdentity('token', 'user', 'entity');

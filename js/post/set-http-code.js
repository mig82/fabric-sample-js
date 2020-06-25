var Param = com.konylabs.middleware.dataobject.Param;

function setHttpCode(code, message){
	result.addParam(new Param(
		'httpStatusCode',
		code,
		'number'
	))

	if(message){
		result.addParam(new Param( 'message', message, 'string' ))
	}
}

function setOk(message){
	setHttpCode(200, message || "Ok")
}

function setUnauthorised(message){
	setHttpCode(401, message || "Unauthorised")
}

function setForbidden(message){
	setHttpCode(403, message || "Forbidden")
}

function setNotFound(message){
	setHttpCode(404, message || "Not found")
}

setOk("Eureka!");

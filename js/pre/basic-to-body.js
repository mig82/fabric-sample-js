var params = serviceInputParams
var Base64 = java.util.Base64


/**
 * atob - A polyfill for the atob function.
 *  
 * @param  {type} encoded A string in base64 encoding 
 * @return {type}         The decoded string. 
 */ 
function atob(encoded){
	//return new String(Base64.getDecoder().decode(encoded))
	var bytes = Base64.getDecoder().decode(encoded)
	var chars = []
	for (var i = 0; i < bytes.length; i++){
		chars.push( String.fromCharCode(bytes[i]) )
	}
	return chars.join("")
}


/**
 * basicToBody - Decodes a Basic authorization header and puts the credentials in the request's body.
 *  
 * @return {type}  description 
 */ 
function basicToBody(){
	if(!params.get('client_id') || !params.get('client_secret')){

		var authorization = request.getHeader('authorization') || request.getHeader('Authorization')
		if(typeof authorization !== "undefined"){

			var decoded = atob(authorization)
			var split = decoded.split(":")
			var key = split[0]
			var secret = split[1]
			
			params.put('client_id', key)
			params.put('client_secret', secret)
		}
	}
}

basicToBody()

function popParam(record, paramId){
	var param = record.getParamByName(paramId)
	record.removeParamsByName(paramId)
	return param
}

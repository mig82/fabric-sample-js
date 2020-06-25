/**
* Renames an existing array.
*/
function renameArray(oldName, newName){
	var array = result.findDataset(oldName);
	if(array) array.setId(newName);
}

renameArray("accts", "accounts");

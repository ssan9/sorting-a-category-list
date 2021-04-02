module.exports = function sortCategoriesForInsert(inputJson) {
	let categorySortArray = [];

	// firstly we iterate over the JSON string and push all the grand parent categories into the array 
	for (let i = 0; i < inputJson.length; i++) {
		if (inputJson[i].parent_id === null) {
			categorySortArray.push(inputJson[i]);
		}
	}

	// we iterate over the JSON string and then push all parent categories first and then their children into the array
	for (let i = 0; i < inputJson.length; i++) {
		for (let j = 0; j < inputJson.length; j++) {
			if (categorySortArray[i].id === inputJson[j].parent_id) {
				categorySortArray.push(inputJson[j]);
			}
		}
	}
	return categorySortArray;
}



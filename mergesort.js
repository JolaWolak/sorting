function split(wholeArray) {

  var center = Math.ceil(wholeArray.length/2),
  	  firstHalf = [],
  	  secondHalf = [];

  firstHalf = wholeArray.slice(0,center);
  secondHalf = wholeArray.slice(center);

  return [firstHalf, secondHalf];
}

function merge(arr1,arr2) {
	var sortedArray = [];
	var i1=0, i2=0,
		l1=arr1.length, 
		l2=arr2.length;

	if (l1===0 || l2===0) return arr1.concat(arr2);

	while (i1<l1 && i2<l2){
		if(arr1[i1]<arr2[i2]) {
			sortedArray.push(arr1[i1]);
			i1++;
		} else {
			sortedArray.push(arr2[i2]);
			i2++;
		}
	}
	if(i1<l1) {
		sortedArray = sortedArray.concat(arr1.slice(i1));
	} else if (i2<l2) {
		sortedArray = sortedArray.concat(arr2.slice(i2));
	}

	return sortedArray;
}

function mergeSort(array) {
    if (array.length<2) return array;
	var twoArrays = split(array);
	return merge(mergeSort(twoArrays[0]),mergeSort(twoArrays[1]));
};
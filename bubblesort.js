var swap = function(a,i,j){
	var tmp = a[i];
	a[i] = a[j];
	a[j] = tmp;
}

function bubbleSort(arr) {

  var sorted = false;
  var swapped = false;
  var last = arr.length;

  while (sorted===false) {
  for (var i = 1; i < last; i++) {
  	if (arr[i]<arr[i-1]) {
  		swap(arr,i-1,i);
  		swapped = true;
  	}
  }

  last -= 1;
  if (swapped===false) {
  		sorted = true;
  	} else {
  		swapped = false;
  	}
  }

  return arr;
}
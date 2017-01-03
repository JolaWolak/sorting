describe('Split Array function', function() {
  it('is able to split an empty array into two halves', function() {
    expect( split([]) ).toEqual( [[],[]] ); 
  });
  it('is able to split a two element array into two halves', function() {
    expect( split([33,5]) ).toEqual( [[33],[5]] ); 
  });
  it('is able to split a single element array into two halves', function() {
    expect( split([5]) ).toEqual( [[5],[]] ); 
  });
  it('is able to split a longer even-length array into two halves', function() {
    expect( split([1,2,3,4,5,6,7,8,9,0]) ).toEqual( [[1,2,3,4,5],[6,7,8,9,0]] ); 
  });
  it('is able to split a longer odd-length array into two halves', function() {
    expect( split([1,2,3,4,5,6,7,8,9]) ).toEqual( [[1,2,3,4,5],[6,7,8,9]] ); 
  });
});

describe('Merge Arrays function', function() {
  it('is able to merge 2 empty arrays into one empty array', function() {
    expect( merge([],[]) ).toEqual( [] ); 
  });
  it('is able to merge 2 single-element arrays into one 2-element array', function() {
    expect( merge([1],[2]) ).toEqual( [1,2] ); 
  });
  it('is able to merge a single-element array with an empty one', function() {
    expect( merge([],[2]) ).toEqual( [2] ); 
  });
  it('is able to merge a single-element array with an empty one - order reversed', function() {
    expect( merge([1],[]) ).toEqual( [1] ); 
  });
  it('is able to merge two larger sorted arrays into one', function() {
    expect( merge([1,2,3,4,5],[6,7,8,9]) ).toEqual( [1,2,3,4,5,6,7,8,9] ); 
  });
  it('is able to merge two larger sorted arrays into one - interleave', function() {
    expect( merge([1,10,12,32],[7,18,21,34,45]) ).toEqual( [1,7,10,12,18,21,32,34,45] ); 
  });

});

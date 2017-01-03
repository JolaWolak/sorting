describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
    it('handles a single element array', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
    it('handles a numerical array', function(){
    expect( bubbleSort([1,6,3,7,9,2]) ).toEqual( [1,2,3,6,7,9] );
  });
    it('handles any characters array', function(){
    expect( bubbleSort(['w','a','P']) ).toEqual( ['P','a','w'] );
  });
});
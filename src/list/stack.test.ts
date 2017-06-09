import { Stack } from './stack';
import { expect } from 'chai';

describe('Stack', () => {

  let stack: Stack<any>;
  beforeEach(() => {
    stack = new Stack();
  })


  it('should initialize', () => {
    expect(stack).exist;
  });

  it('should peek the top item', () => {
    stack.push('item');
    expect(stack.peek()).equal('item');
  });

  it('should push and increase size', () => {
    stack.push('item');
    expect(stack.size).equal(1);
  });

  it('should pop an item off', () => {
    stack.push('item');
    expect(stack.pop()).equal('item');
  });

  it('should pop and decrease size', () => {
    stack.push('item');
    stack.pop();
    expect(stack.size).equal(0);
  });

  it('should push and pop items', () => {
    expect(stack.size).equal(0);

    stack.push('item1');
    expect(stack.peek()).equal('item1');
    expect(stack.size).equal(1);

    stack.push('item2');
    expect(stack.peek()).equal('item2');
    expect(stack.size).equal(2);

    stack.push('item3');
    expect(stack.peek()).equal('item3');
    expect(stack.size).equal(3);


    expect(stack.pop()).equal('item3');
    expect(stack.size).equal(2);

    stack.push('item4');
    expect(stack.peek()).equal('item4');
    expect(stack.size).equal(3);
    expect(stack.pop()).equal('item4');
    expect(stack.size).equal(2);
    
    
    expect(stack.pop()).equal('item2');
    expect(stack.size).equal(1);
    
    expect(stack.pop()).equal('item1');
    expect(stack.size).equal(0);
  });

});
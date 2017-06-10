import { Queue } from './queue';
import { expect } from 'chai';

describe('Queue', () => {

  let queue: Queue<any>;
  beforeEach(() => {
    queue = new Queue();
  })


  it('should initialize', () => {
    expect(queue).exist;
  });

  it('should enqueue and increase size', () => {
    queue.enqueue('item');
    expect(queue.size).equal(1);
  });

  it('should dequeue an item off', () => {
    queue.enqueue('item');
    expect(queue.dequeue()).equal('item');
  });

  it('should dequeue and decrease size', () => {
    queue.enqueue('item');
    queue.dequeue();
    expect(queue.size).equal(0);
  });

  it('should enqueue and dequeue items', () => {
    expect(queue.size).equal(0);

    queue.enqueue('item1');
    expect(queue.size).equal(1);

    queue.enqueue('item2');
    expect(queue.size).equal(2);

    queue.enqueue('item3');
    expect(queue.size).equal(3);


    expect(queue.dequeue()).equal('item1');
    expect(queue.size).equal(2);

    queue.enqueue('item4');
    expect(queue.size).equal(3);

    expect(queue.dequeue()).equal('item2');
    expect(queue.size).equal(2);
    
    
    expect(queue.dequeue()).equal('item3');
    expect(queue.size).equal(1);
    
    expect(queue.dequeue()).equal('item4');
    expect(queue.size).equal(0);
  });
});
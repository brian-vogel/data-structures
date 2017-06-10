import { Stack } from './../stack';
import { List } from './list';
import { expect } from 'chai';

describe('List', () => {

  let list: List<string>;
  let initializedList: List<string>;
  const listItems = [
    'item1',
    'item2',
    'item3',
  ];

  beforeEach(() => {
    const otherList = new Stack<string>();
    listItems.forEach((item) => { otherList.push(item); });

    list = new List<string>();
    initializedList = new List<string>(otherList);
  })


  it('should initialize', () => {
    expect(list).exist;
  });

  it('should return the size of the empty list', () => {
    expect(list.size).equals(0);
  });

  it('should return the size of the initialized list', () => {
    expect(initializedList.size).equals(3);
  });

  it('should test if the empty list isEmpty', () => {
    expect(list.isEmpty()).true;
  });

  it('should test if the initialized list isEmpty', () => {
    expect(initializedList.isEmpty()).false;
  });

  it('should copy an existing list', () => {
    list = new List(initializedList);
    expect(list.size).equal(3);
  });

  it('should create a copy of itself', () => {
    let newlist = initializedList.copy();
    expect(newlist.size).equals(3);
  });

  it('should loop over each value in the list', () => {
    let count = 0;
    initializedList.forEach((value) => {
      expect(listItems.some((listItem) => listItem === value)).true;
      count++;
    });

    expect(count).equals(initializedList.size);
  });

  it('should map the list to a new list', () => {
    let count = 0;
    let map = initializedList.map((value) => {
      expect(listItems.some((listItem) => listItem === value)).true;
      count++;
      return 'item';
    });
    map.forEach((value) => {
      expect(value).equals('item');
    });
    expect(map.size).equals(initializedList.size);
    expect(count).equal(map.size);
  });

  it('should reduce the list to a single value', () => {
    let count = 0;
    let reducedValue = initializedList.reduce((value, accumulator) => {
      expect(listItems.some((listItem) => listItem === value)).true;      
      count++;
      return ++accumulator;
    }, 0);

    expect(count).equals(initializedList.size);  
    expect(reducedValue).equals(initializedList.size);
  });
});
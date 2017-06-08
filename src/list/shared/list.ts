import { list_node as node } from './list-node';

export class list<T> {
  protected head: node<T>;
  protected _size: number;

  constructor(list?: list<T>) {
    this._size = 0;

    this.copy_nodes(list);
  }

  public get size(): number {
    return this._size;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public copy(): list<T> {
    return new list(this);
  }

  public forEach<Q>(callback: (value: T) => Q) {
    let temp = this.head;
    while (temp != null) {
      callback(temp.value);
      temp = temp.next;
    }
  }

  public map<Q>(callback: (value: T) => Q): list<Q> {
    let temp = this.head;
    let newList = new list<Q>();
    // newList.head = new node(callback(temp.value));
    let newNode = newList.head;
    while (temp != null) {
      newNode = new node(callback(temp.value));
      newNode = newNode.next;
      temp = temp.next;
    }
    newList._size = this.size;
    return newList;
  }

  public filter(callback: (value: T) => boolean): list<T> {
    let temp = this.head;
    let newList = new list<T>();
    newList.head = new node(temp.value);
    let newNode = newList.head;
    while (temp.next != null) {
      temp = temp.next;
      if (callback(temp.value)) {
        newNode.next = new node(temp.value);
        newNode = newNode.next;
        newList._size++;
      }
    }
    return newList;
  }

  public reduce<Q>(callback: (value: T, accumulator: Q) => Q, accumulator: any): Q {
    let temp = this.head;
    if(accumulator == null) {
      accumulator = temp.value;
      temp = temp.next;
    }
    while(temp != null) {
      accumulator = callback(temp.value, accumulator);
    }
    return accumulator;
  }

  private copy_nodes(list: list<T>) {
    if (list == null || list.head == null) {
      this.head = null;
      return;
    }
    this.head = new node(list.head.value);

    let listNode = list.head;
    let thisNode = this.head;
    while (listNode.next !== null) {
      thisNode.next = new node(listNode.next.value);
      listNode = listNode.next;
      thisNode = thisNode.next;
    }
    this._size = list.size;
  }

  protected findNode(index: number): node<T> {
    if (index < 0 || index > this._size - 1) {
      throw new Error('Index out of range');
    }

    let currentNode = this.head;
    for (let skip = 1; skip < index; skip++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
} 
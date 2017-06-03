import { list_node as node } from './list-node';

export abstract class list<T> {
  protected head: node<T>;
  protected _size: number;

  constructor(list?: list<T>) {
    this._size = 0;

    this.copy(list);
  }

  public get size(): number {
    return this._size;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public copy(list: list<T>) {
    if (list == null || list.head == null) {
      this.head = null;
      return;
    }
    this.head = new node(list.head.data);

    let listNode = list.head;
    let thisNode = this.head;
    while (listNode.next !== null) {
      thisNode.next = new node(listNode.next.data);
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
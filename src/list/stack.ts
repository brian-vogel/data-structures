import { list } from './shared/list';
import { list_node as node } from './shared/list-node';

export class stack<T> extends list<T> {

  constructor(list?: list<T>) {
    super(list);
  };

  public peek(): T {
    if (this.head == null) {
      return null;
    }
    return this.head.data;
  }

  public push(data: T) {
    let newHead = new node<T>(data);

    newHead.next = this.head;
    this.head = newHead;

    this._size++;
  }

  public pop(): T {
    if (this.head == null) {
      return null;
    }

    let data = this.head.data;
    this.head = this.head.next;

    this._size--;
    return data;
  }
}
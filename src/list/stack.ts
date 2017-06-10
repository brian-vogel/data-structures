import { List } from './shared/list';
import { list_node as node } from './shared/list-node';

export class Stack<T> extends List<T> {

  constructor(list?: List<T>) {
    super(list);
  };

  public peek(): T {
    if (this.head == null) {
      return null;
    }
    return this.head.value;
  }

  public push(value: T) {
    let newHead = new node<T>(value);

    newHead.next = this.head;
    this.head = newHead;

    this._size++;
  }

  public pop(): T {
    if (this.head == null) {
      return null;
    }

    let value = this.head.value;
    this.head = this.head.next;

    this._size--;
    return value;
  }
}
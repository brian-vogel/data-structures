import { list } from './shared/list';
import { list_node as node } from './shared/list-node';

export class queue<T> extends list<T> {
  private tail: node<T>;

  constructor(list?: list<T>) {
    super(list);
    if(this.head == null) {
      this.tail = null;
      return;
    }
    this.tail = this.findNode(this._size-1);
  }

  public enqueue(value: T) {
    let newTail = new node<T>(value);

    if (this.tail == null) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }

    this._size++;
  }

  public dequeue(): T {
    if (this.head == null) {
      return null;
    }

    let value = this.head.value;
    this.head = this.head.next;
    if (this.head == null) {
      this.tail = null;
    }

    this._size--;
    return value;
  }
}
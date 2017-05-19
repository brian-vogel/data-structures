export class queue<T> {

  private head: node<T>;
  private tail: node<T>;
  private _size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public get size(): number {
    return this._size;
  }

  public enqueue(item: T) {
    let newTail = new node<T>()
    newTail.item = item;
    newTail.next = null;

    if (!this.tail) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }
    this._size++;
  }

  public dequeue(): T {
    if (!this.head) {
      return null;
    }

    let item = this.head.item;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }

    this._size--;
    return item;
  }
}

class node<T> {
  item: T;
  next: node<T>;
}
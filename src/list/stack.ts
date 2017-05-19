export class stack<T> {

  private head: node<T>;
  private _size: number;

  constructor(){
    this.head = null;
    this._size = 0;
  };

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public get size(): number {
    return this._size;
  }

  public peek(): T {
    if(!this.head) {
      return null;
    }
    return this.head.item;
  }

  public push(item: T) {
    let newHead = new node<T>()
    newHead.item = item;
    newHead.next = this.head;
    this.head = newHead;
    this._size++;
  }

  public pop(): T {
    if(!this.head) {
      return null;
    }

    let item = this.head.item;
    this.head = this.head.next;
    this._size--;
    return item;
  }
}

class node<T> {
  item: T;
  next: node<T>;
}
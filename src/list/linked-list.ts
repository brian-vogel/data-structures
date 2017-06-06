import { list } from './shared/list';
import { list_node as node } from './shared/list-node';

export class linked_list<T> extends list<T> {

  constructor(list?: list<T>) {
    super(list);
  }

  public insertFront(data: T) {
    let newNode = new node(data);

    newNode.next = this.head;
    this.head = newNode;

    this._size++;
  }

  public insertAt(data: T, index: number) {
    if (index === 0) {
      this.insertFront(data);
      return;
    }
    if (index === this._size) {
      this.insertBack(data);
      return;
    }

    let newNode = new node(data);
    let prevNode = this.findNode(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this._size++;
  }

  public insertBack(data: T) {
    let newNode = new node(data);

    this.findNode(this._size - 1).next = newNode;
    this._size++;
  }

  public findFront(): T {
    return this.findNode(0).data;
  }

  public findAt(index: number): T {
    return this.findNode(index).data;
  }

  public findBack(): T {
    return this.findNode(this._size - 1).data;
  }

  public removeFront(): T {
    let currentNode = this.findNode(0);
    this.head = currentNode.next;

    this._size--;
    return currentNode.data;
  }

  public removeAt(index: number): T {
    if (index === 0) {
      this.removeFront();
      return;
    }
    if (index === this._size-1) {
      this.removeBack();
      return;
    }

    let prevNode = this.findNode(index-1);
    let currentNode = prevNode.next;
    prevNode.next = prevNode.next.next;

    this._size--;
    return currentNode.data;
  }

  public removeBack(): T {
    let prevNode = this.findNode(this._size-2);
    let currentNode = prevNode.next;
    prevNode.next = null;

    this._size--;
    return currentNode.next.data;
  }
}
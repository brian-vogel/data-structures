import { List } from './shared/list';
import { list_node as node } from './shared/list-node';

export class linked_list<T> extends List<T> {

  constructor(list?: List<T>) {
    super(list);
  }

  public insertFront(value: T) {
    let newNode = new node(value);

    newNode.next = this.head;
    this.head = newNode;

    this._size++;
  }

  public insertAt(value: T, index: number) {
    if (index === 0) {
      this.insertFront(value);
      return;
    }
    if (index === this._size) {
      this.insertBack(value);
      return;
    }

    let newNode = new node(value);
    let prevNode = this.findNode(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this._size++;
  }

  public insertBack(value: T) {
    let newNode = new node(value);

    this.findNode(this._size - 1).next = newNode;
    this._size++;
  }

  public findFront(): T {
    return this.findNode(0).value;
  }

  public findAt(index: number): T {
    return this.findNode(index).value;
  }

  public findBack(): T {
    return this.findNode(this._size - 1).value;
  }

  public removeFront(): T {
    let currentNode = this.findNode(0);
    this.head = currentNode.next;

    this._size--;
    return currentNode.value;
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
    return currentNode.value;
  }

  public removeBack(): T {
    let prevNode = this.findNode(this._size-2);
    let currentNode = prevNode.next;
    prevNode.next = null;

    this._size--;
    return currentNode.next.value;
  }
}
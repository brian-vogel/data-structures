export class list_node<T> {
  public value: T;
  public next: list_node<T>;

  constructor(value: T = null) {
    this.value = value;
    this.next = null;
  }

}
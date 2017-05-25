export class list_node<T> {
  public data: T;
  public next: list_node<T>;

  constructor(data: T = null) {
    this.data = data;
    this.next = null;
  }

}
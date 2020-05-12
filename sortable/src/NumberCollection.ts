import { Sorter } from './Sorter';

export class NumberCollection extends Sorter {
  constructor(private collection: number[]) {
    super();
  }

  get length() {
    return this.collection.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.collection[leftIndex];
    this.collection[leftIndex] = this.collection[rightIndex];
    this.collection[rightIndex] = temp;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex] > this.collection[rightIndex];
  }

  toString(): string {
    let result = "[";
    for(let i = 0; i < this.collection.length; i++) {
      result += ` ${this.collection[i]}`;
    }
    return result + "]"
  }
}
import { Sorter } from './Sorter';

export class CharacterCollection extends Sorter {
  private collection: string[];
  constructor(private data: string) {
    super();
    this.collection = data.split('');
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
    return this.collection.join('');
  }
}
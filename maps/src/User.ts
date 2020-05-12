import faker from 'faker';
import { Locatable } from './Locatable';

export class User implements Locatable {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `The name of person is ${this.name}`;
  }
}
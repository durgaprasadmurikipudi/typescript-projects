import faker from 'faker';
import { Locatable } from './Locatable';

export class Company implements Locatable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number,
    long: number
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())      
    };
  }

  markerContent(): string {
    return `Company name is ${this.companyName}`;
  }
}
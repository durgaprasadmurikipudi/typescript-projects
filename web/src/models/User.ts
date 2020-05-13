import axios, { AxiosResponse } from 'axios';
import { Event } from './Event';

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
};

export class User {  

  private events: Event = new Event();

  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
};


import { AxiosPromise, AxiosResponse } from "axios";
import { HasID } from "./ApiSync";
import { Callback } from "./Event";

export interface ModelAttributes<T extends HasID> {
  get<K extends keyof T> (key: K): T[K];
  set(value: T): void;
  getAll(): T; 
};

export interface Sync<T extends HasID> {
  fetch(id: number): AxiosPromise;
  save(data: T extends HasID): AxiosPromise;
}

export interface Events {
  on(eventName:string, callback: Callback): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasID> {
  constructor(
    private attributes: ModelAttributes<T extends HasID>,
    private events: Events,
    private sync: Sync<T extends HasID>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set (data: T extends HasID) {
    this.attributes.set(data);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if(!id) {
      throw new Error('Fetch cannot be done without an ID.');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch((): void => {
        this.trigger('error');
      });
  }
}
import axios, { AxiosPromise } from 'axios';

export interface HasID {
  id?: number;
}

export class ApiSync<T> {
  constructor(private rootUrl:string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`)
  }

  save(data: T extends HasID): void {
    // If the id is present, it is already saved once, becuase json-server inserts the  server  with 
    // the id property
    const { id } = data;
    if(id) {
      axios.put(`${this.rootUrl}/${id}`, data);
      return;
    }

    axios.post(this.rootUrl, data);
  }
}
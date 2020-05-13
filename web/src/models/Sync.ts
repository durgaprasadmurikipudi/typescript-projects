import axios from 'axios';

export class Sync {
  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
    .then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    // If the id is present, it is already saved once, becuase json-server inserts the  server  with 
    // the id property
    if(this.get('id')) {
      axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data);
      return;
    }

    axios.post('http://localhost:3000/users/', this.data);
  }
}
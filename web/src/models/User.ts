import { Model } from "./Model";
import { Attribute } from './Attributes';
import { Event } from './Event';
import { ApiSync, HasID } from './ApiSync';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
};

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
  static getUser(user: UserProps extends HasID): User {
    return new User(
      new Attribute<UserProps>(user),
      new Event(),
      new ApiSync(rootUrl)
    )
  }
  
};


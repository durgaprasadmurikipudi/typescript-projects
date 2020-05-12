import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const map = new CustomMap('map', {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});

const user = new User();
const company = new Company();

map.addMarker(user);
map.addMarker(company);
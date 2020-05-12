import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from './CharactersCollection';

const numberCollection = new NumberCollection([47, -80, 9, 74, 45]);
const charsCollection = new CharacterCollection('cooawsxzdfl');

numberCollection.sort();
charsCollection.sort();

console.log('No compilation errors');
console.log(numberCollection.toString());
console.log(charsCollection.toString());
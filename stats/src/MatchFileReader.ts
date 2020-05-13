import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { getDateFromString } from './utils';
import { MatchData } from './MatchData';

export class MatchFileReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      getDateFromString(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}

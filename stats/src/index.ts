import { MatchFileReader } from './MatchFileReader';
import { Summary } from './Summary';
import { WinsAnalyzer } from './WinsAnalyzer';
import { ConsoleReport } from './ConsoleReport';

const matchFileReader = new MatchFileReader('original.csv');

matchFileReader.read();

const summary = new Summary(new WinsAnalyzer('Man United'), new ConsoleReport());

summary.buildAndPrintReport(matchFileReader.data);

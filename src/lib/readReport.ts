import fs from 'fs';
import { checkType } from '@cpmech/js2ts';
import { IReport, zeroReport } from './typesReport';

export const readReport = (filepath: string): IReport => {
  const dataJson = fs.readFileSync(filepath, 'utf8');
  const dataObject = JSON.parse(dataJson);
  const report = checkType(zeroReport(), dataObject);
  if (!report) {
    throw 'cannot parse report';
  }
  return report;
};

import glob from 'glob';
import { readReport } from '.';
import { IReportsByMatrix, IReportsByPlatform, IReportsBySolver } from './typesMaps';

export const readReports = (
  directory: string,
): {
  reportsByMatrix: IReportsByMatrix;
  reportsByPlatform: IReportsByPlatform;
  reportsBySolver: IReportsBySolver;
} => {
  const filepaths = glob.sync(`${directory}/*.json`);
  const reportsByMatrix: IReportsByMatrix = {};
  const reportsByPlatform: IReportsByPlatform = {};
  const reportsBySolver: IReportsBySolver = {};
  for (let i = 0; i < filepaths.length; i++) {
    const report = readReport(filepaths[i]);
    reportsByMatrix[report.matrixName] = report;
    reportsByPlatform[report.platform] = report;
    reportsBySolver[report.solver.solverKind] = report;
  }
  return { reportsByMatrix, reportsByPlatform, reportsBySolver };
};

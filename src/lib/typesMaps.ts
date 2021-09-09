import { IReport } from '.';

export interface IReportsByMatrix {
  [matrix: string]: IReport;
}

export interface IReportsByPlatform {
  [platform: string]: IReport;
}

export interface IReportsBySolver {
  [solver: string]: IReport;
}

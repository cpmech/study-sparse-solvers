export interface IRead {
  timeReadNs: number;
  timeReadStr: string;
}

export interface ITriplet {
  nrow: number;
  ncol: number;
  pos: number;
  max: number;
  symPart: boolean;
  symFull: boolean;
}

export interface ISolver {
  solverKind: string;
  symmetry: string;
  ordering: string;
  scaling: string;
  pctIncWorkspace: number;
  maxWorkMemory: number;
  openmpNumThreads: number;
  doneInitialize: boolean;
  doneFactorize: boolean;
  ndim: number;
  timeInitNs: number;
  timeFactNs: number;
  timeSolveNs: number;
  timeTotalNs: number;
  timeInitStr: string;
  timeFactStr: string;
  timeSolveStr: string;
  timeTotalStr: string;
}

export interface IVerify {
  maxAbsA: number;
  maxAbsAx: number;
  maxAbsDiff: number;
  relativeError: number;
  timeCheckNs: number;
  timeCheckStr: string;
}

export interface IReport {
  platform: string;
  matrixName: string;
  read: IRead;
  triplet: ITriplet;
  solver: ISolver;
  verify: IVerify;
}

export const zeroRead = (): IRead => ({
  timeReadNs: 0,
  timeReadStr: '',
});

export const zeroTriplet = (): ITriplet => ({
  nrow: 0,
  ncol: 0,
  pos: 0,
  max: 0,
  symPart: false,
  symFull: false,
});

export const zeroSolver = (): ISolver => ({
  solverKind: '',
  symmetry: '',
  ordering: '',
  scaling: '',
  pctIncWorkspace: 0,
  maxWorkMemory: 0,
  openmpNumThreads: 0,
  doneInitialize: false,
  doneFactorize: false,
  ndim: 0,
  timeInitNs: 0,
  timeFactNs: 0,
  timeSolveNs: 0,
  timeTotalNs: 0,
  timeInitStr: '',
  timeFactStr: '',
  timeSolveStr: '',
  timeTotalStr: '',
});

export const zeroVerify = (): IVerify => ({
  maxAbsA: 0,
  maxAbsAx: 0,
  maxAbsDiff: 0,
  relativeError: 0,
  timeCheckNs: 0,
  timeCheckStr: '',
});

export const zeroReport = (): IReport => ({
  platform: '',
  matrixName: '',
  read: zeroRead(),
  triplet: zeroTriplet(),
  solver: zeroSolver(),
  verify: zeroVerify(),
});

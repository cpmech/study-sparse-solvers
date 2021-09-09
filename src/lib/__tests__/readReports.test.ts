import { readReports } from '../readReports';

describe('readReports', () => {
  it('reads reports', () => {
    const { reportsByMatrix, reportsByPlatform, reportsBySolver } =
      readReports('src/lib/__tests__');
    expect(reportsByMatrix).toHaveProperty('bfwb62');
    expect(reportsByPlatform).toHaveProperty('russell');
    expect(reportsBySolver).toHaveProperty('MMP');
  });
});

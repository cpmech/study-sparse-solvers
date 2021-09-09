import { readReport } from '../readReport';

describe('readReport', () => {
  it('reads test report', () => {
    const rpt = readReport('src/lib/__tests__/6f584983-5420-43cf-bc37-915f12cd8217.json');
    expect(rpt).toMatchSnapshot();
  });
});

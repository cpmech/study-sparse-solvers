import { readReport } from './lib';

const main = async () => {
  const report = readReport('results/laclib/pre2/metis_intel_seq.json');
  console.log(report);
};

(async () => {
  try {
    await main();
  } catch (error) {
    console.warn(error);
  }
})();

type MassUnity = 'kg' | 'hg' | 'dag' | 'g' | 'dg' | 'cg' | 'mg';

const massConversion: { [key in MassUnity]: number } = {
  kg: 1000,
  hg: 100,
  dag: 10,
  g: 1,
  dg: 0.0001,
  cg: 0.00001,
  mg: 0.000001,
};

const convertMass = (value: number, from: MassUnity, to: MassUnity): number => {
  return (value * massConversion[from]) / massConversion[to];
};

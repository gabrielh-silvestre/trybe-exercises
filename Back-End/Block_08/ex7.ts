type CapacityUnity = 'kl' | 'hl' | 'dal' | 'l' | 'dl' | 'cl' | 'ml';

const capacityConversion: { [key in CapacityUnity]: number } = {
  kl: 1000,
  hl: 100,
  dal: 10,
  l: 1,
  dl: 0.1,
  cl: 0.01,
  ml: 0.001,
};

const convertCapacity = (
  value: number,
  from: CapacityUnity,
  to: CapacityUnity
): number => {
  return (value * capacityConversion[from]) / capacityConversion[to];
};

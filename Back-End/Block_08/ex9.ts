const cubicDistanceConversion: { [key in DistanceUnity]: number } = {
  km: Math.pow(1000, 3),
  hm: Math.pow(100, 3),
  dam: Math.pow(10, 3),
  m: Math.pow(1, 3),
  dm: Math.pow(0.1, 3),
  cm: Math.pow(0.01, 3),
  mm: Math.pow(0.001, 3),
};

const convertCubicDistance = (
  value: number,
  from: DistanceUnity,
  to: DistanceUnity
): number => {
  return (
    (value * cubicDistanceConversion[from]) / cubicDistanceConversion[to]
  );
};

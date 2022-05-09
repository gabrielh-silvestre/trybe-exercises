type DistanceUnity = 'km' | 'hm' | 'dam' | 'm' | 'dm' | 'cm' | 'mm';

const squareDistanceConversion: { [key in DistanceUnity]: number } = {
  km: Math.pow(1000, 2),
  hm: Math.pow(100, 2),
  dam: Math.pow(10, 2),
  m: Math.pow(1, 2),
  dm: Math.pow(0.1, 2),
  cm: Math.pow(0.01, 2),
  mm: Math.pow(0.001, 2),
};

const convertSquareDistance = (
  value: number,
  from: DistanceUnity,
  to: DistanceUnity
): number => {
  return (
    (value * squareDistanceConversion[from]) / squareDistanceConversion[to]
  );
};

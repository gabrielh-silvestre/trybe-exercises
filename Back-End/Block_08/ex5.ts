type MetricType = 'km' | 'hm' | 'dam' | 'm' | 'dm' | 'cm' | 'mm';

const sizeConversion: { [key in MetricType]: number } = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
};

const convert = (value: number, from: MetricType, to: MetricType): number => {
  return (value * sizeConversion[from]) / sizeConversion[to];
};

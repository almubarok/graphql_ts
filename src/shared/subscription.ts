export const TOPICS = {
  DEVICE: 'DEVICE',
  DATA: 'DATA',
};

export type SubsType = 'CREATE' | 'UPDATE' | 'DELETE';

export const createSubs = (type: SubsType, value: any) => {
  return {
    mutation: type,
    value,
  };
};

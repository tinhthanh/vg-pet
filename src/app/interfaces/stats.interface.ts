export interface IStatsInfo {
  icon: string;
  alt: string;
  label: string;
  unit: string;
  field: string;
  navTo?: any;
}

export interface IStatsInfoList {
  [key: string]: IStatsInfo;
}

export interface IPetStatsInfo extends IStatsInfo {
  class?: string;
  desc: string;
}

export interface IIPetStatsInfoList {
  [key: string]: IPetStatsInfo;
}

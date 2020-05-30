type Rule =  'ガチヤグラ' | 'ガチアサリ' | 'ガチエリア' | 'ガチホコ';
 export interface LeagueResponse {
  result: StageData[]
}

 export type UnixTime = number;

interface StageData {
  rule: Rule;
  ruleEx: StageRuleEx;
  maps: Array<String>;
  mapsEx: Array<MapsEx>; // maps_ex: MapsEx[];
  start: string;
  startUtc: string;
  startT: UnixTime;
  end: string;
  endUtc: string;
  endT: UnixTime;
}

interface StageRuleEx {
  key: string;
  name: Rule;
  statink: string;
}

interface MapsEx {
  id: number;
  name: string;
  image: string;
  statink: string;
}
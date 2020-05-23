type Rule =  'ガチヤグラ' | 'ガチアサリ' | 'ガチエリア' | 'ガチホコ';
 export interface LeagueResponse {
  result: StageData[]
}

interface StageData {
  rule: Rule;
  ruleEx: StageRuleEx;
  maps: Array<String>;
  mapsEx: Array<MapsEx>; // maps_ex: MapsEx[];
  start: string;
  startUtc: string;
  startT: number;
  end: string;
  endUtc: string;
  endT: number;
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
type Rule =  'ガチヤグラ' | 'ガチアサリ' | 'ガチエリア' | 'ガチホコ';

export interface LeagueResponse {
  result: StageData[]
}

interface StageData {
  rule: Rule;
  rule_ex: StageRuleEx;
  maps: Array<String>;
  maps_ex: Array<MapsEx>; // maps_ex: MapsEx[];
  start: string;
  start_utc: string;
  start_t: number;
  end: string;
  end_utc: string;
  end_t: number;
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
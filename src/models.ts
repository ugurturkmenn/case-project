import { ReactNode } from "react";

type BasketData = {
  betName: string;
  odds: string;
  side: string;
  teams: string;
  league: string;
  id: string;
  mbs: string;
};

type BetType = {
  betName: string;
  betOdds: Outcome[];
  teams: string;
  league: string;
  id: string;
  mbs: string;
};

interface League {
  name: string;
  icon: ReactNode;
}

enum ApiStatus {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}

interface Section {
  typeName: string;
  visible: boolean;
}

interface TeamDetail {
  team: string;
  score: string;
  logo: string;
}

interface SuperCardDetailItem {
  home: TeamDetail;
  away: TeamDetail;
}

interface Outcome {
  ID: string;
  O: string;
  N: string;
  MBS: string;
  G: string;
  OD: number;
  IMF: boolean;
}

export interface OutcomeGroup {
  ID: string;
  N: string;
  MBS: string;
  SO: number;
  OC: { [key: string]: Outcome };
}

interface BetData {
  C: string;
  N: string;
  TYPE: string;
  NID: string;
  D: string;
  T: string;
  DAY: string;
  S: string;
  LN: string;
  IMF: boolean;
  OCG: { [key: string]: OutcomeGroup };
  HEC: boolean;
  FVR?: boolean;
}

type BetItem = {
  betName: string;
  betOdds: OutcomeGroup[];
  teams: string;
  league: string;
  id: string;
};

type Calculater = {
  multipliedOdds: number;
  maxBetWin: number;
};

export {
  League,
  Section,
  SuperCardDetailItem,
  ApiStatus,
  BetData,
  BasketData,
  Outcome,
  BetItem,
  BetType,
  Calculater,
};

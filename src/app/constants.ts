export const leagueId = "1119313867575783424";

export type Owner = {
  rosterId: number;
  id: string;
  name: string;
  eliminationWeek: number | null;
  gulagWeeks: number[];
};

export const CURRENT_WEEK = 17;

export const owners: Owner[] = [
  {
    rosterId: 1,
    id: "975121697885958144",
    name: "Ben",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 2,
    id: "604958001710825472",
    name: "Charlie",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 3,
    id: "335933295390887936",
    name: "Nick S",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 4,
    id: "339913290731831296",
    name: "Ryan & Adi",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 5,
    id: "986714810358276096",
    name: "Nick R",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 6,
    id: "736463367308455936",
    name: "Sean",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 7,
    id: "470134079178665984",
    name: "Michael",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 8,
    id: "721091694656839680",
    name: "Brandon L",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 9,
    id: "740782066421116928",
    name: "Alistair",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 10,
    id: "941074432527884288",
    name: "David",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 11,
    id: "975135141964120064",
    name: "Josh",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 12,
    id: "975133925980876800",
    name: "Max",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 13,
    id: "469004302371778560",
    name: "Brandon S",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 14,
    id: "975118880039301120",
    name: "Derek",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 15,
    id: "300420851122049024",
    name: "Bryan Y",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 16,
    id: "987448466064338944",
    name: "Ryland",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 17,
    id: "340391675220213760",
    name: "Evan",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 19,
    id: "987806287201087488",
    name: "Daniel",
    eliminationWeek: null,
    gulagWeeks: [],
  },
  {
    rosterId: 20,
    id: "677386688741343232",
    name: "Kyle",
    eliminationWeek: null,
    gulagWeeks: [],
  },
];

export const simulatedOwners: Owner[] = [
  {
    rosterId: 1,
    id: "975121697885958144",
    name: "Ben",
    eliminationWeek: null,
    gulagWeeks: [2, 10],
  },
  {
    rosterId: 2,
    id: "604958001710825472",
    name: "Charlie",
    eliminationWeek: 2,
    gulagWeeks: [2],
  },
  {
    rosterId: 3,
    id: "335933295390887936",
    name: "Nick S",
    eliminationWeek: 12,
    gulagWeeks: [12],
  },
  {
    rosterId: 4,
    id: "339913290731831296",
    name: "Ryan & Adi",
    eliminationWeek: 12,
    gulagWeeks: [12],
  },
  {
    rosterId: 5,
    id: "986714810358276096",
    name: "Nick R",
    eliminationWeek: 12,
    gulagWeeks: [12],
  },
  {
    rosterId: 6,
    id: "736463367308455936",
    name: "Sean",
    eliminationWeek: 12,
    gulagWeeks: [],
  },
  {
    rosterId: 7,
    id: "470134079178665984",
    name: "Michael",
    eliminationWeek: 3,
    gulagWeeks: [3],
  },
  {
    rosterId: 8,
    id: "721091694656839680",
    name: "Brandon L",
    eliminationWeek: 5,
    gulagWeeks: [3, 5],
  },
  {
    rosterId: 9,
    id: "740782066421116928",
    name: "Alistair",
    eliminationWeek: 4,
    gulagWeeks: [4],
  },
  {
    rosterId: 10,
    id: "941074432527884288",
    name: "David",
    eliminationWeek: 6,
    gulagWeeks: [4, 6],
  },
  {
    rosterId: 11,
    id: "975135141964120064",
    name: "Josh",
    eliminationWeek: 13,
    gulagWeeks: [6],
  },
  {
    rosterId: 12,
    id: "975133925980876800",
    name: "Max",
    eliminationWeek: 14,
    gulagWeeks: [8, 11],
  },
  {
    rosterId: 13,
    id: "469004302371778560",
    name: "Brandon S",
    eliminationWeek: 15,
    gulagWeeks: [10],
  },
  {
    rosterId: 14,
    id: "975118880039301120",
    name: "Derek",
    eliminationWeek: 16,
    gulagWeeks: [],
  },
  {
    rosterId: 15,
    id: "300420851122049024",
    name: "Bryan Y",
    eliminationWeek: 8,
    gulagWeeks: [8],
  },
  {
    rosterId: 16,
    id: "987448466064338944",
    name: "Ryland",
    eliminationWeek: 7,
    gulagWeeks: [7],
  },
  {
    rosterId: 17,
    id: "340391675220213760",
    name: "Evan",
    eliminationWeek: 9,
    gulagWeeks: [9],
  },
  {
    rosterId: 19,
    id: "987806287201087488",
    name: "Daniel",
    eliminationWeek: 17,
    gulagWeeks: [9],
  },
  {
    rosterId: 20,
    id: "677386688741343232",
    name: "Kyle",
    eliminationWeek: 11,
    gulagWeeks: [11, 7],
  },
];
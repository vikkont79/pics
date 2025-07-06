const TIMEOUT = 1000;
const LIVES_COUNT = 3;

const AppRoute = {
  Start: '/start',
  Game: '/game',
  Results: '/results',
};

const GAME_TYPES = [
  { type: 'finnish', icon: 'fin', label: 'aloittaa' },
  { type: 'german', icon: 'ger', label: 'beginnen' },
  { type: 'italian', icon: 'ita', label: 'iniziare' },
];

export { TIMEOUT, LIVES_COUNT, AppRoute, GAME_TYPES }
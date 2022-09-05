import TinyBus from 'tinybus';

const GlobalEvents = {
  LOGIN_TIME_OUT: 'LOGIN_TIME_OUT',
};

const globalBus = new TinyBus();

export { globalBus, GlobalEvents };

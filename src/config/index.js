import email from '../services/email';
import cron from '../services/cron';

const CONFIG = {
  APP: {
    port: 3000,
    host: 'localhost'
  },
  JWT: {
    secret: 'RUj2J]FcebI`:^SOzv&#x.J<gtZx(-\k'
  },
  WHITELIST:  ['http://localhost:4200'],
  DIR: {},
  EMAIL: email,
  CRON: cron
};

export default CONFIG;
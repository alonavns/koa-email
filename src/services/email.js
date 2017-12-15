import moment from 'moment';
import elastic_email from 'elastic-email';
import dotenv from 'dotenv';
import _ from 'lodash';

dotenv.config();
const elastic = elastic_email.createClient({apiKey: process.env.EL_EMAIL_API_KEY});

class Email {
  constructor () {
    _.from = 'hosting@ed-admin.com';
  }

  send_eamil(callback) {
    let params = {
      from: _.from,
      subject: 'Test Email',
      to: 'alona.vereshaka@gmail.com',
      body: '<h1>Hi Alona, this is Koa-email test.</h1>'
    }

    elastic.email.send(params, (err, result) => {
      callback(err, result);
    });
  }
}

export default new Email();

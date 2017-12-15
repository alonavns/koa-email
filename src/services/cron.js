import moment from 'moment';
import cron from 'cron';

const CronJob = cron.CronJob;

var job = null;

var cronJob = (params) => {
  if (job) job.stop();
  let cronData = {
    cronTime: params.cronTime || '00 47 07 * * 1-7',
    onTick: params.onTick,
    start: true,
    timeZone: 'Europe/London'
  };
  if (params.onComplete) cronData.onComplete = params.onComplete;
  job = new CronJob(cronData);
}

export default cronJob;
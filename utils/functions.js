import moment from 'moment';

export const formatDate = date => moment.unix(date / 1000).format('DD/MM/YYYY');
export const fromNow = date => moment.unix(date / 1000).fromNow();

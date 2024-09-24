import moment from 'moment';

export const formatDate = (date: string): string => {
  const mDate = moment(date);

  const isToday = mDate.isSame(new Date(), 'day');
  const isThisYear = mDate.isSame(new Date(), 'year');

  const formattedDate = isToday
    ? `Today, ${mDate.format('HH:mm')}`
    : isThisYear
      ? mDate.format('MMM DD')
      : mDate.format('MMM DD, YYYY');

  return formattedDate;
};

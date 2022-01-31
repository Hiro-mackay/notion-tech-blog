import { DateProperties } from '../types';

export const convertNotionDateToDate = (notionDate: DateProperties): Date => {
  return new Date(notionDate.date.start);
};

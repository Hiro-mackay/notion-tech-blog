import { DateProperties } from '../../../Types';

export const convertNotionDateToDate = (notionDate: DateProperties): Date => {
  return new Date(notionDate.date.start);
};

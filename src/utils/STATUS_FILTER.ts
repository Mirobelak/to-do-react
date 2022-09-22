export interface STATUS_FILTER_TYPE {
  ALL: string;
  COMPLETED: string;
  INCOMPLETED: string;
}

export const STATUS_FILTER: STATUS_FILTER_TYPE = {
    COMPLETED: 'completed', 
    INCOMPLETED: 'incompleted',
    ALL: 'all',
  }
import { deprecated } from 'typesafe-actions';
import { IHomeState } from '@/types/HomeTypes';
const { createAction } = deprecated;

export const homeActions = {
  fetchTitleThunk: createAction('FETCH_HOME_TITLE_THUNK_SUCCESS', (action) => {
    return (title: IHomeState) => action(title);
  }),
};

import { createAction } from 'typesafe-actions';
import { IHomeState } from '@/types/HomeTypes';

export const homeActions = {
  fetchTitleThunk: createAction('FETCH_HOME_TITLE_THUNK_SUCCESS', (action) => {
    return (title: IHomeState) => action(title);
  }),
};

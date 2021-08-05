import produce from 'immer';
import { ActionType, getType, createReducer } from 'typesafe-actions';
import rootAction from '@/actions';
import { IHomeState } from '@/types/HomeTypes';

export type IHomeActions = ActionType<typeof rootAction.homeActions>;
export const defaultHomeState: IHomeState = { id: 0, title: '', loading: false, error: false };

const home = createReducer<IHomeState, IHomeActions>(defaultHomeState).handleType(
  getType(rootAction.homeActions.fetchTitleThunk),
  (state, action) =>
    produce(state, (draft) => {
      draft.loading = false;
      draft.error = false;
      draft.id = action.payload.id;
      draft.title = action.payload.title;
    })
);

export default home;

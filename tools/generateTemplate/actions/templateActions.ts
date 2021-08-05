import { createAction } from 'typesafe-actions';
import { ITemplateState } from '@tempPath/types/TemplateTypes';

export const templateActions = {
  fetchThunk: createAction('FETCH_TEMPLATE_THUNK_SUCCESS')<ITemplateState>(),
};

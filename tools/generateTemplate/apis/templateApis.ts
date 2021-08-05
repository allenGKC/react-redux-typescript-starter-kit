import axios, { AxiosResponse } from 'axios';
import urlHelper from '@/utils/urlHelper';
import { ITemplateState } from '@tempPath/types/TemplateTypes';

export function getThunkRequest(): Promise<AxiosResponse<ITemplateState>> {
  return axios.get<ITemplateState>(urlHelper.t(urlHelper.servers.prodServer, 'thunk'));
}

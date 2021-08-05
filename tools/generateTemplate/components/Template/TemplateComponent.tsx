import * as React from 'react';
import { getThunkRequest } from '@tempPath/apis/templateApis';
import { ITemplateState } from '@tempPath/types/TemplateTypes';
import './template.less';

interface ITemplateProps {
  fetchThunk: (temp: ITemplateState) => void;
  templateState: ITemplateState;
}
const TemplateComponent: React.FunctionComponent<ITemplateProps> = React.memo(({ fetchThunk, templateState }) => {
  React.useEffect(() => {
    // Get data by thunk
    getThunkRequest().then((payload) => {
      fetchThunk(payload.data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">{templateState.text ? templateState.text : ''}</div>
      </div>
    </div>
  );
});

export default TemplateComponent;

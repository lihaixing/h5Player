import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from '../src';
import MediaSource from './mediaSource';
import Video from './video';

const View = () => {
  return (
    <>
      {/* <Main /> */}
      <MediaSource />
      <Video />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <View />
  </React.StrictMode>,
  document.getElementById('root')
);

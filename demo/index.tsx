import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from '../src';
import MediaSource from './app/mediaSource';
import Video from './app/video';

const View = () => {
  return (
    <>
      {/* <Main /> */}
      <MediaSource />
      {/* <Video /> */}
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <View />
  </React.StrictMode>,
  document.getElementById('root')
);

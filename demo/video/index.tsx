import React, { useCallback, useEffect, useRef } from 'react';
import style from './index.module.scss';
import mp4Url from '../assets/1.mp4';
// const mp4Url = '/vodfiles/sharefiles/ff808081526e509201527780a6b10010/s/live/9680e1d67fbc749d0180801905063f0e/202205/01225238/ab8d15a6-113a-4c22-af22-0adc212d36f6.mp4';

const IndexView = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controller = useRef<HTMLVideoElement | null>(null);

  const measuredRef = useCallback((node: HTMLVideoElement) => {
    if (node !== null) {
      videoRef.current = node;
      // const text1 = node.addTextTrack('captions', '东华门', 'zh-CN');
      // text1.mode = 'showing';
      console.log('canPlayType', node.canPlayType('video/mp4')); // maybe
      console.log('canPlayType', node.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')); // probably
      node.load(); // 重新加载音频/视频元素
      console.log('currentSrc', node.currentSrc);
      console.log('buffered', node.buffered);
      console.log('autoplay', node.autoplay);
      console.log('currentTime', node.currentTime);
      console.log('defaultMuted', node.defaultMuted);
      console.log('defaultPlaybackRate', node.defaultPlaybackRate);
      console.log('duration', node.duration);
      console.log('ended', node.ended);
      console.log('error', node.error);
      console.log('networkState', node.networkState);
      console.log('playbackRate', node.playbackRate);
      console.log('played', node.played);
      console.log('preload', node.preload);
      console.log('readyState', node.readyState);
      console.log('seekable', node.seekable);
      console.log('seeking', node.seeking);
      console.log('volume', node.volume);
    }
  }, []);

  const onPlay = () => {
    videoRef.current?.play();
  };
  const onPause = () => {
    videoRef.current?.pause();
  };
  const onCanPlay = () => {
    console.log('onCanPlay: 当浏览器可以播放音频/视频时');
  };
  const onCanPlayThrough = () => {
    console.log('onCanPlayThrough: 当浏览器可在不因缓冲而停顿的情况下进行播放时');
  };
  const onDurationChange = () => {
    console.log('onDurationChange: 当音频/视频的时长已更改时');
  };
  return (
    <div className={style.container}>
      <video ref={measuredRef} crossOrigin="anonymous" controls src={mp4Url} autoPlay={true} onCanPlay={onCanPlay} onCanPlayThrough={onCanPlayThrough} onDurationChange={onDurationChange}></video>
      <button onClick={onPlay}>播放</button>
      <button onClick={onPause}>暂停</button>
    </div>
  );
};

export default IndexView;

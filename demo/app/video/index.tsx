import React, { useCallback, useEffect, useRef } from 'react';
import style from './index.module.scss';
import mp4Url from '../assets/1.mp4';
import poster from '../assets/hx.jpeg';
import vttTxt from '../assets/text.vtt';
// const mp4Url = '/vodfiles/sharefiles/ff808081526e509201527780a6b10010/s/live/9680e1d67fbc749d0180801905063f0e/202205/01225238/ab8d15a6-113a-4c22-af22-0adc212d36f6.mp4';
// const mp4Url = '/netfix/demo/frag_bunny.mp4';
const IndexView = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const measuredRef = useCallback((node: HTMLVideoElement) => {
    if (node !== null) {
      videoRef.current = node;
      // @ts-ignore
      window.videoRef = node;
      // 方法
      console.log('canPlayType', node.canPlayType('video/mp4')); // maybe
      console.log('canPlayType', node.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')); // probably
      node.load(); // 重新加载音频/视频元素

      // 只读属性
      console.log('currentSrc', node.currentSrc); // 返回当前音频/视频的 URL
      console.log('buffered', node.buffered); // 返回表示音频/视频已缓冲部分的 TimeRanges 对象
      // console.log('controller', node.controller); // (不生效) 返回表示音频/视频当前媒体控制器的 MediaController 对象
      console.log('duration', node.duration); // 返回当前音频/视频的长度（以秒计）
      console.log('ended', node.ended); // 返回音频/视频的播放是否已结束
      console.log('error', node.error); // 返回表示音频/视频错误状态的 MediaError 对象
      console.log('networkState', node.networkState); // 返回音频/视频的当前网络状态
      console.log('readyState', node.readyState); // 返回音频/视频当前的就绪状态
      console.log('seekable', node.seekable); // 返回表示音频/视频可寻址部分的 TimeRanges 对象
      console.log('seeking', node.seeking); // 返回用户是否正在音频/视频中进行查找
      // console.log('startDate', node.startDate); // (不生效)返回表示当前时间偏移的 Date 对象

      // 只读且能设置的属性
      node.currentTime = 10;
      node.volume = 0.5;
      console.log('src', node.src); // 设置或返回音频/视频元素的当前来源
      console.log('autoplay', node.autoplay); // 设置或返回是否在加载完成后随即播放音频/视频
      console.log('currentTime', node.currentTime); // 设置或返回音频/视频中的当前播放位置（以秒计）
      console.log('controls', node.controls); // 设置或返回音频/视频是否显示控件（比如播放/暂停等）
      console.log('crossOrigin', node.crossOrigin); // 设置或返回音频/视频的 CORS 设置
      console.log('defaultMuted', node.defaultMuted); // 设置或返回音频/视频默认是否静音
      console.log('defaultPlaybackRate', node.defaultPlaybackRate); // 设置或返回音频/视频的默认播放速度
      console.log('loop', node.loop); // 设置或返回音频/视频是否应在结束时重新播放
      // console.log('mediaGroup', node.mediaGroup); // (不生效) 设置或返回音频/视频所属的组合（用于连接多个音频/视频元素）
      console.log('muted', node.muted); // 设置或返回音频/视频是否静音
      console.log('paused', node.paused); // 设置或返回音频/视频是否暂停
      console.log('playbackRate', node.playbackRate); // 设置或返回音频/视频播放的速度
      console.log('played', node.played); // 返回表示音频/视频已播放部分的 TimeRanges 对象
      console.log('preload', node.preload); // 设置或返回音频/视频是否应该在页面加载后进行加载
      console.log('volume', node.volume); // 设置或返回音频/视频的音量
    }
  }, []);

  // 首页加载会触发
  const onEmptied = () => {
    console.log('onEmptied: 当目前的播放列表为空时'); //
  };
  const onTimeUpdate = () => {
    console.log('onTimeUpdate: 当目前的播放位置已更改时');
  };
  const onLoadStart = () => {
    console.log('onLoadStart: 当浏览器开始查找音频/视频时'); // 开始加载第一帧
  };
  const onProgress = () => {
    console.log('onProgress: 当浏览器正在下载音频/视频时');
  };
  const onSuspend = () => {
    console.log('onSuspend: 当浏览器刻意不获取媒体数据时');
  };
  const onDurationChange = () => {
    // console.log('duration', videoRef.current?.duration); // yes
    console.log('onDurationChange: 当音频/视频的时长已更改时');
  };
  const onLoadedMetadata = () => {
    // console.log('duration', videoRef.current?.duration); // yes
    console.log('onLoadedMetadata: 当浏览器已加载音频/视频的元数据时'); // The duration and dimensions knowed
  };
  const onLoadedData = () => {
    console.log('onLoadedData: 当浏览器已加载音频/视频的当前帧时'); // 当媒体当前播放位置的帧完成加载时，会触发loadeddata事件；通常是第一帧
  };
  const onCanPlay = () => {
    console.log('onCanPlay: 当浏览器可以播放音频/视频时');
  };
  const onCanPlayThrough = () => {
    console.log('onCanPlayThrough: 当浏览器可在不因缓冲而停顿的情况下进行播放时');
  };

  // 操作会触发
  const onPlay = () => {
    videoRef.current?.play();
  };
  const onPlaying = () => {
    console.log('onPlaying: 当音频/视频在已因缓冲而暂停或停止后已就绪时');
  };

  const onPause = () => {
    videoRef.current?.pause();
  };
  const onEnded = () => {
    console.log('onEnded: 当目前的播放列表已结束时');
  };

  const onRateChange = () => {
    console.log('onRateChange: 当音频/视频的播放速度已更改时');
  };
  const onSeeked = () => {
    console.log('onSeeked: 当用户已移动/跳跃到音频/视频中的新位置时');
  };
  const onSeeking = () => {
    console.log('onSeeking: 当用户开始移动/跳跃到音频/视频中的新位置时');
  };
  const onStalled = () => {
    console.log('onStalled: 当浏览器尝试获取媒体数据，但数据不可用时');
  };

  const onVolumeChange = () => {
    console.log('onVolumeChange: 当音量已更改时');
  };
  const onWaiting = () => {
    console.log('onWaiting: 当视频由于需要缓冲下一帧而停止');
  };
  return (
    <div className={style.container}>
      <video
        width="100%"
        ref={measuredRef}
        // 事件
        onWaiting={onWaiting}
        onVolumeChange={onVolumeChange}
        onTimeUpdate={onTimeUpdate}
        onSuspend={onSuspend}
        onStalled={onStalled}
        onSeeking={onSeeking}
        onSeeked={onSeeked}
        onRateChange={onRateChange}
        onProgress={onProgress}
        onPlaying={onPlaying}
        onLoadStart={onLoadStart}
        onLoadedMetadata={onLoadedMetadata}
        onLoadedData={onLoadedData}
        onEnded={onEnded}
        onEmptied={onEmptied}
        onCanPlay={onCanPlay}
        onCanPlayThrough={onCanPlayThrough}
        onDurationChange={onDurationChange}
        // poster={poster}
        // 属性
        crossOrigin="anonymous"
        controls
        src={mp4Url}
        autoPlay={true}
      >
        <track kind="captions" src={vttTxt}></track>
        {/* <track kind="subtitles" src={vttTxt}></track> */}
        {/* <track kind="timed descriptions" src={vttTxt}></track> */}
      </video>
      <button onClick={onPlay}>播放</button>
      <button onClick={onPause}>暂停</button>
    </div>
  );
};

export default IndexView;

import React, { useCallback, useEffect, useRef } from 'react';
import style from './index.module.scss';
// import mp4Url from './assets/1.mp4';
// const mp4Url = '/vodfiles/sharefiles/ff808081526e509201527780a6b10010/s/live/9680e1d67fbc749d0180801905063f0e/202205/01225238/ab8d15a6-113a-4c22-af22-0adc212d36f6.mp4';
const mp4Url = '/netfix/demo/frag_bunny.mp4';

const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
// const mimeCodec = 'video/mp4; codecs="avc1.42001E, mp4a.40.2"';

const IndexView = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaSource = useRef<MediaSource | null>(null);

  const sourceOpen = (ev: MediaSourceEventMap['sourceopen']) => {
    // console.log(_.readyState); // open
    console.log(mediaSource.current?.readyState);

    const sourceBuffer = mediaSource.current?.addSourceBuffer(mimeCodec);
    fetch(mp4Url, {
      headers: {
        'Content-Type': 'arrayBuffer',
      },
    })
      .then(res => res.arrayBuffer())
      .then(buf => {
        sourceBuffer?.addEventListener('error', ev => {
          console.log('error', ev);
        });

        sourceBuffer?.addEventListener('updatestart', () => {
          console.log('sourceBuffer updatestart');
        });
        sourceBuffer?.addEventListener('update', () => {
          console.log('sourceBuffer update');
        });
        sourceBuffer?.addEventListener('updateend', (ev: SourceBufferEventMap['updateend']) => {
          console.log('sourceBuffer updateend');

          if (mediaSource.current?.readyState === 'open') {
            mediaSource.current?.endOfStream();
          }
        });
        sourceBuffer?.appendBuffer(buf);
      });
  };
  const onPlay = () => {
    videoRef.current?.play();
  };

  const measuredRef = useCallback(node => {
    if (node !== null) {
      videoRef.current = node;

      if (videoRef.current && 'MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
        mediaSource.current = new MediaSource();
        //console.log(mediaSource.readyState); // closed
        videoRef.current.src = URL.createObjectURL(mediaSource.current);
        mediaSource.current.addEventListener('sourceopen', sourceOpen);
      } else {
        console.error('Unsupported MIME type or codec: ', mimeCodec);
      }
    }
  }, []);
  return (
    <div className={style.container}>
      <video ref={measuredRef} crossOrigin="anonymous" controls></video>
      <button onClick={onPlay}>播放</button>
    </div>
  );
};

export default IndexView;

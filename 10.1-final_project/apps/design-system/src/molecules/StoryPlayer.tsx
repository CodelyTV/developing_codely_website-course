import { useEffect, useRef, useState } from "react";

import { Icon } from "../atoms/Icon";

import { getLoadObserver, getPlayObserver } from "./observer";

import styles from "./StoryPlayer.module.scss";

export interface Story {
  title: string;
  videoSrc: string;
  posterSrc: string;
  miniature: string;
}

export interface StoryPlayerProps {
  stories: Story[];
  isFullScreen?: boolean;
  startOn?: number;
  handleClose?: () => void;
}

export function StoryPlayer({ stories, isFullScreen, startOn, handleClose }: StoryPlayerProps) {
  const [current, setCurrent] = useState(startOn || 0);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(true);
  const loop = stories.length === 1;

  function toggleMute() {
    setMuted(!muted);
  }

  function next() {
    setProgress(0);
    if (current < stories.length - 1) {
      setCurrent(current + 1);

      return;
    }
    setCurrent(0);
  }

  function previous() {
    setProgress(0);
    if (current > 0) {
      setCurrent(current - 1);

      return;
    }
    setCurrent(stories.length - 1);
  }

  function handleProgress(ev: Event) {
    const video = ev.target as HTMLVideoElement;
    const duration = video.duration;
    const current = video.currentTime;

    if (!duration) {
      setProgress(0);

      return;
    }

    setProgress((current / duration) * 100);
  }

  function getProgressAsPercentage(i: number) {
    if (i === current) {
      return `${progress}%`;
    }
    if (i < current) {
      return "100%";
    }

    return "0%";
  }

  useEffect(() => {
    setCurrent(startOn || 0);
  }, [startOn]);

  return (
    <section className={styles.player}>
      <section className={styles.player__controls}>
        {!loop && (
          <div className={styles.progress}>
            {stories.map((story, i) => (
              <div
                key={story.title}
                className={styles.progress__bar}
                style={{ "--progress": getProgressAsPercentage(i) } as React.CSSProperties}
              ></div>
            ))}
          </div>
        )}
        <button onClick={toggleMute} className={styles.player__btn} aria-label="Mutear">
          <Icon icon={muted ? "volumeMuted" : "volume"} size="small" />
        </button>
        {isFullScreen && (
          <button onClick={handleClose} className={styles.player__btn} aria-label="Cerrar">
            <Icon icon="close" size="small" />
          </button>
        )}
      </section>
      <StoryVideo
        videoSrc={stories[current].videoSrc}
        imageSrc={stories[current].posterSrc}
        handleEnd={next}
        handleProgress={handleProgress}
        muted={muted}
        loop={loop}
      />
      {!loop && (
        <>
          <button className={styles.player__listcontrol} onClick={previous}>
            Previous
          </button>
          <button className={styles.player__listcontrol} onClick={next}>
            Next
          </button>
        </>
      )}
    </section>
  );
}

function StoryVideo({
  videoSrc,
  imageSrc,
  muted,
  handleEnd,
  handleProgress,
  loop,
}: {
  imageSrc: string;
  videoSrc: string;
  muted: boolean;
  handleEnd?: () => void;
  handleProgress?: (ev: Event) => void;
  loop?: boolean;
}) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video.current) {
      return;
    }
    getLoadObserver().observe(video.current);

    if (handleEnd) {
      video.current.addEventListener("ended", handleEnd);
    }

    if (handleProgress) {
      video.current.addEventListener("timeupdate", handleProgress);
    }

    return () => {
      if (!video.current) {
        return;
      }

      getPlayObserver().unobserve(video.current);

      if (handleEnd) {
        video.current.removeEventListener("ended", handleEnd);
      }

      if (handleProgress) {
        video.current.removeEventListener("timeupdate", handleProgress);
      }
    };
  }, [videoSrc]);

  return (
    <video ref={video} width="363" height="678" muted={muted} loop={loop} poster={imageSrc} playsInline tabIndex={-1}>
      <source data-src={videoSrc} type="video/mp4" />
      Sorry, your browser does not support embedded videos.
    </video>
  );
}

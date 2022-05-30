import { useEffect, useRef } from "react";

import styles from "./StoryPlayer.module.scss";

export interface Story {
  videoSrc: string;
  posterSrc: string;
}

export interface StoryPlayerProps {
  stories: Story[];
}

export function StoryPlayer({ stories }: StoryPlayerProps) {
  const story = stories[0];
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video.current) {
      return;
    }

    const playObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              console.error("can't play video");
            });

            return;
          }

          video.pause();
        });
      },
      { threshold: 0.75 }
    );

    const loadObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;

            for (const source in video.children) {
              const videoSource = video.children[source] as HTMLSourceElement;
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src ?? "";
              }
            }

            video.load();
            observer.unobserve(video);
            playObserver.observe(video);

            return;
          }
        });
      },
      { threshold: 0 }
    );

    loadObserver.observe(video.current);

    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
    };
  });

  return (
    <section className={styles.player}>
      <video ref={video} width="363" height="678" muted loop poster={story.posterSrc} playsInline tabIndex={-1}>
        <source data-src={story.videoSrc} type="video/mp4" />
        Sorry, your browser does not support embedded videos.
      </video>
    </section>
  );
}

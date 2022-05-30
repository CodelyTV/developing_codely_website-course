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

  return (
    <section className={styles.player}>
      <video
        src={story.videoSrc}
        width="363"
        height="678"
        muted
        loop
        poster={story.posterSrc}
        playsInline
        tabIndex={-1}
        autoPlay
      >
        Sorry, your browser does not support embedded videos.
      </video>
    </section>
  );
}

import { useState } from "react";

import { Avatar } from "../atoms/Avatar";

import { Story, StoryPlayer } from "./StoryPlayer";

import styles from "./StoriesMobile.module.scss";

export interface StoriesMobileProps {
  stories: Story[];
}
export function StoriesMobile({ stories }: StoriesMobileProps) {
  const [displayPlayer, setDisplayPlayer] = useState(false);
  const [startStory, setStartStory] = useState(0);

  function showStory(i: number) {
    setStartStory(i);
    setDisplayPlayer(true);
  }

  function hideStory() {
    setDisplayPlayer(false);
  }

  return (
    <section className={styles.stories}>
      <div className={styles.stories__miniatures}>
        {stories.map((story, i) => (
          <section key={story.title} className={styles.miniature}>
            <button onClick={() => showStory(i)} className={styles.miniature__image}>
              <Avatar src={story.miniature} alt={story.title} size="large" />
            </button>
            {story.title}
          </section>
        ))}
      </div>

      <div className={styles.stories__video} style={{ display: displayPlayer ? "flex" : "none" }}>
        <StoryPlayer stories={stories} startOn={startStory} isFullScreen={true} handleClose={hideStory} />
      </div>
    </section>
  );
}

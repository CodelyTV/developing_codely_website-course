import stories from "../../data/stories.json";

export interface Story {
  title: string;
  miniature: string;
  videoSrc: string;
  posterSrc: string;
}

export function useStories(): Story[] {
  return stories;
}

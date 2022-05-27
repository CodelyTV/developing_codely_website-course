import changelog from "../../data/changelog.json";

export interface ChangelogItem {
  title: string;
  subtitle?: string;
  platform: "codely" | "twitch" | "youtube";
  url: string;
  image: string;
  mode: "dark" | "light";
  date: string;
}

export function useChangelog(): ChangelogItem[] {
  return changelog as ChangelogItem[];
}

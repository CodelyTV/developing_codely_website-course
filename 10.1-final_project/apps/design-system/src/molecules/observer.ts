let playObserver: IntersectionObserver | undefined;
let loadObserver: IntersectionObserver | undefined;

export function getPlayObserver(): IntersectionObserver {
  if (playObserver) {
    return playObserver;
  }

  playObserver = new IntersectionObserver(
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

  return playObserver;
}

export function getLoadObserver(): IntersectionObserver {
  if (loadObserver) {
    return loadObserver;
  }

  loadObserver = new IntersectionObserver(
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
          getPlayObserver().observe(video);

          return;
        }
      });
    },
    { threshold: 0 }
  );

  return loadObserver;
}

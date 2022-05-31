export function useIsServerSide(): () => boolean {
  return function () {
    return typeof window === "undefined";
  };
}

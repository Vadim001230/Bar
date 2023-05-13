export default function smoothScroll(distance: number, duration: number): void {
  const initialTime = performance.now();
  const scrollY = window.scrollY || window.pageYOffset;

  const easing = (t: number): number =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const getScrollTop = (time: number): number => {
    const currentTime = time - initialTime;
    if (currentTime >= duration) {
      return scrollY + distance;
    } else {
      const normalizedTime = easing(currentTime / duration);
      return scrollY + Math.floor(distance * normalizedTime);
    }
  };

  const scrollToTop = (time: number): void => {
    const scrollTop = getScrollTop(time);
    window.scrollTo(0, scrollTop);
    if (scrollTop < scrollY + distance) {
      requestAnimationFrame(scrollToTop);
    }
  };

  requestAnimationFrame(scrollToTop);
}

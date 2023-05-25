export default function smoothScroll(distance: number, duration: number) {
  const initialTime = performance.now();
  const startScrollY = window.scrollY || window.pageYOffset;

  const easing = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

  const scrollStep = (currentTime: number) => {
    const elapsedTime = currentTime - initialTime;
    if (elapsedTime >= duration) {
      window.scrollTo(0, startScrollY + distance);
      return;
    }
    const normalizedTime = easing(elapsedTime / duration);
    const scrollDistance = Math.floor(distance * normalizedTime);
    window.scrollTo(0, startScrollY + scrollDistance);
    requestAnimationFrame(scrollStep);
  };

  requestAnimationFrame(scrollStep);
}

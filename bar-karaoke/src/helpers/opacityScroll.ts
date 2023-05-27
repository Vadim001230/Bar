import { RefObject } from 'react';

export const opacityScroll = (elementRef: RefObject<HTMLElement>, opacityСoeff: number) => {
  return () => {
    const parallaxText = elementRef.current;
    const windowHeight = window.innerHeight;

    if (parallaxText) {
      const elementHeight = parallaxText.offsetHeight;
      const halfWindowHeight = windowHeight / opacityСoeff;
      const distanceFromTop = parallaxText.offsetTop - window.scrollY;

      if (distanceFromTop + elementHeight < halfWindowHeight) {
        const opacity =
          1 - (halfWindowHeight - (distanceFromTop + elementHeight)) / halfWindowHeight;
        const lineHeight =
          1 + (halfWindowHeight - (distanceFromTop + elementHeight)) / (halfWindowHeight / 2);
        parallaxText.style.opacity = opacity.toString();

        const children = Array.from(parallaxText.children) as HTMLElement[];
        children.forEach((child) => {
          child.style.lineHeight = lineHeight.toString();
        });
      } else {
        parallaxText.style.opacity = '1';
        const children = Array.from(parallaxText.children) as HTMLElement[];
        children.forEach((child) => {
          child.style.lineHeight = '1';
        });
      }
    }
  };
};

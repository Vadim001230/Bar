import { RefObject } from 'react';

export const widthScroll = (elementRef: React.RefObject<HTMLDivElement>) => {
  return () => {
    const separator = elementRef.current;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (separator) {
      const separatorOffsetTop = separator.offsetTop;
      const separatorHeight = separator.offsetHeight;
      const halfWindowHeight = windowHeight / 2;
      const distanceFromTop = separatorOffsetTop - scrollPosition;

      if (distanceFromTop + separatorHeight < halfWindowHeight) {
        const width =
          120 - ((halfWindowHeight - (distanceFromTop + separatorHeight)) / halfWindowHeight) * 100;
        separator.style.width = width + '%';
      } else {
        separator.style.width = '100%';
      }
    }
  };
};

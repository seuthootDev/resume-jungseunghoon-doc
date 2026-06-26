import { useEffect, useRef, useState } from 'react';

export const DOCUMENT_WIDTH = 900;
const VIEWPORT_PADDING = 16;

export function useDocumentScale() {
  const documentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState<number | undefined>();

  useEffect(() => {
    const element = documentRef.current;
    if (!element) return;

    const update = () => {
      const viewportWidth = window.innerWidth;
      const availableWidth = Math.max(
        viewportWidth - VIEWPORT_PADDING * 2,
        0,
      );
      const nextScale =
        viewportWidth < DOCUMENT_WIDTH
          ? Math.min(1, availableWidth / DOCUMENT_WIDTH)
          : 1;

      setScale(nextScale);
      setScaledHeight(element.offsetHeight * nextScale);
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(element);
    window.addEventListener('resize', update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return { documentRef, scale, scaledHeight };
}

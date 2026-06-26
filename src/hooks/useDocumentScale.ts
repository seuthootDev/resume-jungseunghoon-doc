import { useLayoutEffect, useRef } from 'react';

export const DOCUMENT_WIDTH = 900;
const VIEWPORT_PADDING = 16;

export function useDocumentScale() {
  const scalerRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const documentEl = documentRef.current;
    const scalerEl = scalerRef.current;
    if (!documentEl || !scalerEl) return;

    let frameId = 0;
    let lastScale = -1;
    let lastHeight = -1;

    const apply = () => {
      const viewportWidth = window.innerWidth;
      const availableWidth = Math.max(
        viewportWidth - VIEWPORT_PADDING * 2,
        0,
      );
      const scale =
        viewportWidth < DOCUMENT_WIDTH
          ? Math.min(1, availableWidth / DOCUMENT_WIDTH)
          : 1;

      if (scale < 1) {
        const height = documentEl.offsetHeight * scale;

        if (scale !== lastScale) {
          documentEl.style.transform = `scale(${scale})`;
          lastScale = scale;
        }

        if (Math.abs(height - lastHeight) > 0.5) {
          scalerEl.style.height = `${height}px`;
          lastHeight = height;
        }
      } else {
        if (lastScale !== 1) {
          documentEl.style.transform = '';
          scalerEl.style.height = '';
          lastScale = 1;
          lastHeight = -1;
        }
      }
    };

    const schedule = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(apply);
    };

    schedule();

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(documentEl);
    window.addEventListener('resize', schedule);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return { scalerRef, documentRef };
}

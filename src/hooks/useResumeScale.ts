import { useLayoutEffect, useRef } from 'react';

const DOCUMENT_WIDTH = 900;
const VIEWPORT_PADDING = 16;

export function useResumeScale() {
  const scaleBoxRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scaleBoxEl = scaleBoxRef.current;
    const documentEl = documentRef.current;
    if (!scaleBoxEl || !documentEl) return;

    let frameId = 0;
    let lastScale = 1;
    let lastWidth = -1;
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

      const contentHeight = documentEl.offsetHeight;

      if (scale < 1) {
        const boxWidth = DOCUMENT_WIDTH * scale;
        const boxHeight = contentHeight > 0 ? contentHeight * scale : 0;

        if (scale !== lastScale) {
          documentEl.style.transform = `scale(${scale})`;
          documentEl.style.transformOrigin = 'top left';
          lastScale = scale;
        }

        if (Math.abs(boxWidth - lastWidth) > 0.5) {
          scaleBoxEl.style.width = `${boxWidth}px`;
          lastWidth = boxWidth;
        }

        if (boxHeight > 0 && Math.abs(boxHeight - lastHeight) > 0.5) {
          scaleBoxEl.style.height = `${boxHeight}px`;
          lastHeight = boxHeight;
        }
      } else {
        documentEl.style.transform = '';
        documentEl.style.transformOrigin = '';
        scaleBoxEl.style.width = '';
        scaleBoxEl.style.height = '';
        lastScale = 1;
        lastWidth = -1;
        lastHeight = -1;
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
      documentEl.style.transform = '';
      documentEl.style.transformOrigin = '';
      scaleBoxEl.style.width = '';
      scaleBoxEl.style.height = '';
    };
  }, []);

  return { scaleBoxRef, documentRef };
}

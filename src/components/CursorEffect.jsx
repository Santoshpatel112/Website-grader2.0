import { useEffect, useRef } from "react";

const CursorEffect = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const trailPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        cursor.style.opacity = "1";
        trail.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      cursor.style.opacity = "0";
      trail.style.opacity = "0";
    };

    const onMouseDown = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
      trail.style.transform = "translate(-50%, -50%) scale(0.6)";
    };

    const onMouseUp = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      trail.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const animate = () => {
      // Cursor follows immediately
      cursor.style.left = posRef.current.x + "px";
      cursor.style.top = posRef.current.y + "px";

      // Trail follows with smooth lerp
      trailPosRef.current.x += (posRef.current.x - trailPosRef.current.x) * 0.15;
      trailPosRef.current.y += (posRef.current.y - trailPosRef.current.y) * 0.15;
      trail.style.left = trailPosRef.current.x + "px";
      trail.style.top = trailPosRef.current.y + "px";

      rafRef.current = requestAnimationFrame(animate);
    };

    // Hover effect on interactive elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [tabindex]'
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverIn);
        el.addEventListener("mouseleave", handleHoverOut);
      });
    };

    const handleHoverIn = () => {
      cursor.classList.add("cursor-hover");
      trail.classList.add("trail-hover");
    };

    const handleHoverOut = () => {
      cursor.classList.remove("cursor-hover");
      trail.classList.remove("trail-hover");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    rafRef.current = requestAnimationFrame(animate);

    // Set up hover listeners with a MutationObserver for dynamic content
    addHoverListeners();
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="custom-cursor-trail" />
    </>
  );
};

export default CursorEffect;

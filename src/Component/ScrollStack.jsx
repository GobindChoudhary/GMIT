import { useLayoutEffect, useRef, useCallback, useEffect } from "react";
import "../style/ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 60,
  itemStackDistance = 20,
  stackPosition = "25%",
  baseScale = 0.92,
  itemScale = 0.02,
  useWindowScroll = true,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const cardOffsetsRef = useRef([]);
  const endElementOffsetRef = useRef(0);
  const rafRef = useRef(null);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  // Cache card positions on mount and resize
  const cacheCardPositions = useCallback(() => {
    const scrollTop = window.scrollY;
    cardOffsetsRef.current = cardsRef.current.map((card) => {
      if (!card) return 0;
      const rect = card.getBoundingClientRect();
      return rect.top + scrollTop;
    });

    const endElement = document.querySelector(".scroll-stack-end");
    if (endElement) {
      const rect = endElement.getBoundingClientRect();
      endElementOffsetRef.current = rect.top + scrollTop;
    }
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const endElementTop = endElementOffsetRef.current;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardOffsetsRef.current[i] || 0;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      // Calculate scale based on card index
      const targetScale = baseScale + i * itemScale;
      let scale = 1;

      if (scrollTop >= pinStart) {
        const scaleProgress = Math.min(1, (scrollTop - pinStart) / 200);
        scale = 1 - scaleProgress * (1 - targetScale);
      }

      // Calculate translateY for sticky effect
      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      // Apply transforms
      card.style.transform = `translate3d(0, ${Math.round(translateY)}px, 0) scale(${scale.toFixed(3)})`;
      card.style.zIndex = i + 1;
    });
  }, [stackPosition, itemStackDistance, baseScale, itemScale, parsePercentage]);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      updateCardTransforms();
      rafRef.current = null;
    });
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Get all card elements
    const cards = Array.from(scroller.querySelectorAll(".scroll-stack-card"));
    cardsRef.current = cards;

    // Set initial styles
    cards.forEach((card, i) => {
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.position = "relative";
      card.style.zIndex = i + 1;
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
    });

    // Cache positions after a small delay to ensure layout is complete
    const timer = setTimeout(() => {
      cacheCardPositions();
      updateCardTransforms();
    }, 100);

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", cacheCardPositions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", cacheCardPositions);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [itemDistance, cacheCardPositions, updateCardTransforms, handleScroll]);

  // Recache positions when content might have changed
  useEffect(() => {
    const timer = setTimeout(cacheCardPositions, 200);
    return () => clearTimeout(timer);
  }, [children, cacheCardPositions]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;

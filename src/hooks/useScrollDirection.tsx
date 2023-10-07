import { useEffect } from "react";

type ScrollDirection = "up" | "down";

type UseScrollDirectionProps = {
  scrollDirectionCallback: (direction: ScrollDirection, isAnchorLinkScroll: boolean) => void;
  isAnchorLinkScroll: boolean;
}

export const useScrollDirection = ({
  scrollDirectionCallback,
  isAnchorLinkScroll,
}: UseScrollDirectionProps) => {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction: ScrollDirection = scrollY > lastScrollY ? "down" : "up";

      scrollDirectionCallback(direction, isAnchorLinkScroll);

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirectionCallback, isAnchorLinkScroll]);
};

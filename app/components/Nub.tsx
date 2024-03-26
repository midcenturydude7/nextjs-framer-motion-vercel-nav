import React from "react";
import { motion } from "framer-motion";

export default function Nub({ selected }: { selected: number | null }) {
  const [left, setLeft] = React.useState(0);

  React.useEffect(() => {
    const moveNub = () => {
      if (selected) {
        const hoveredTab = document.getElementById(`shift-tab-${selected}`);
        const overlayContent = document.getElementById("overlay-content");

        if (!hoveredTab || !overlayContent) return;

        const tabRect = hoveredTab.getBoundingClientRect();
        const { left: contentLeft } = overlayContent.getBoundingClientRect();

        const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
        setLeft(tabCenter);
      }
    };

    moveNub();
  }, [selected]);

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    ></motion.span>
  );
}

export function Bridge() {
  return <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />;
}

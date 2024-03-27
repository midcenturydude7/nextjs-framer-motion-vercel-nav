"use client";
import React from "react";

import Content from "./Content";
import Tab from "./Tab";

import { AnimatePresence } from "framer-motion";
import { TABS } from "../lib/paths";

export default function Tabs() {
  const [selected, setSelected] = React.useState<number | null>(1);
  const [dir, setDir] = React.useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map(({ title, id }) => {
        return (
          <Tab
            key={id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={id}
          >
            {title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
}

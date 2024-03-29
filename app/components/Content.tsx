import { motion } from "framer-motion";

import Nub, { Bridge } from "./Nub";
import { TABS } from "../lib/paths";

export default function Content({
  selected,
  dir,
}: {
  selected: number | null;
  dir: null | "l" | "r";
}) {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map(({ id, Component }) => {
        return (
          <div className="overflow-hidden" key={id}>
            {selected === id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

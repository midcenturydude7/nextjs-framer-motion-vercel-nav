import Link from "next/link";
import { FiBarChart2, FiHome, FiPieChart } from "react-icons/fi";

export default function Pricing() {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <Link
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiHome className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Startup</span>
      </Link>
      <Link
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Scaleup</span>
      </Link>
      <Link
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Enterprise</span>
      </Link>
    </div>
  );
}

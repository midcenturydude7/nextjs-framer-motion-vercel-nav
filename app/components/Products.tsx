import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Products() {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Startup</h3>
          <Link href="#" className="mb-1 block text-sm text-neutral-400">
            Bookkeeping
          </Link>
          <Link href="#" className="mb-1 block text-sm text-neutral-400">
            Invoicing
          </Link>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
          <Link href="#" className="mb-1 block text-sm text-neutral-400">
            White glove
          </Link>
          <Link href="#" className="mb-1 block text-sm text-neutral-400">
            SOX Compliance
          </Link>
          <Link href="#" className="mb-1 block text-sm text-neutral-400">
            Staffing
          </Link>
          <Link href="#" className="mb-1 block text-sm text-neutral-400">
            More
          </Link>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
}

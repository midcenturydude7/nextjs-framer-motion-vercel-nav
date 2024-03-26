import Blog from "../components/Blog";
import Pricing from "../components/Pricing";
import Products from "../components/Products";

export const TABS = [
  {
    title: "Products",
    Component: Products,
  },
  {
    title: "Pricing",
    Component: Pricing,
  },
  {
    title: "Blog",
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

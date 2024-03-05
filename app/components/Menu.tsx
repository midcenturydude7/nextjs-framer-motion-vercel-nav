"use client";
import React from "react";

export default function Menu() {
  return (
    <div className="flex h-96 w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
}

const Tabs = () => {
  return <div></div>;
};

const ExampleComponent = () => {
  return <div>Hello, world</div>;
};

const TABS = [
  {
    title: "Products",
    Component: ExampleComponent,
  },
  {
    title: "Pricing",
    Component: ExampleComponent,
  },
  {
    title: "Blog",
    Component: ExampleComponent,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

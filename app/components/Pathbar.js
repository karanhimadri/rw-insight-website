import React from "react";
import "../styles/Pathbar.css";
import Link from "next/link";

const Pathbar = () => {
  const path = [
    "Home",
    "CSE",
    "Operating System",
    "Process",
    "Pre-emptive",
    "SJF",
    "example",
  ];
  return (
    <div
      className="text-white px-2 py-2 overflow-x-auto flex gap-2 items-center mt-2 css-pathbar-p"
      aria-label="Breadcrumb Navigation"
    >
      {path.map((item, index) => (
        <p
          key={index}
          className="whitespace-nowrap text-sm text-orange-600 font-semibold"
          aria-label={`Breadcrumb item: ${item}`}
        >
          <Link href={`/${item}`}>{item}</Link>
          {index < path.length - 1 && <span className="mx-2">{">"}</span>}
        </p>
      ))}
    </div>
  );
};

export default Pathbar;

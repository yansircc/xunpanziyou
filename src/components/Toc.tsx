import Link from "next/link";
import React from "react";

type TocProps = {
  toc: {
    depth: number;
    value: string;
  }[];
};

export default function Toc({ toc }: TocProps) {
  return (
    <nav className="toc not-prose bg-zinc-50 p-6 font-medium dark:bg-zinc-900">
      <ul className="space-y-3">
        {toc.map((item) => (
          <li key={item.value} className={`pl-${item.depth * 4}`}>
            <Link
              href={`#${item.value.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5-]+/g, "")}`}
              className="group flex items-center transition-colors duration-200 ease-in-out hover:text-zinc-600"
            >
              <span className="group-hover:text-zinc-6000 mr-2 text-sm text-zinc-400 dark:group-hover:text-zinc-300">
                {item.depth === 1 ? "#" : item.depth === 2 ? "##" : "###"}
              </span>
              <span className="text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-zinc-100">
                {item.value}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

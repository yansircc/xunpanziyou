import React from "react";

type TocProps = {
  toc: {
    depth: number;
    value: string;
  }[];
};

export default function Toc({ toc }: TocProps) {
  return (
    <div className="flex flex-col space-y-2">
      {toc.map((item) => (
        <div key={item.value} className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-500">
              <span className="text-zinc-800 dark:text-zinc-100">
                {item.depth}
              </span>
            </div>
            <div className="text-zinc-800 dark:text-zinc-100">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

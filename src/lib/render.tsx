import React from "react";

interface Params<T> {
  array: Array<{ params: object; children: React.ReactNode }>;
  Comp: React.ComponentType<T>;
  className: string;
}

export function ComponentList<T extends { children?: React.ReactNode}>({
  array,
  Comp,
  className
}: Params<T>) {
  return (
    <ul className={className}>
      {array.map((param, index) => (
        <li key={index}>
          {React.createElement(Comp, param.params as T, param.children)}
        </li>
      ))}
    </ul>
  );
}

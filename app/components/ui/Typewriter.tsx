"use client";
import React from "react";
import { useState, useEffect, ReactNode } from "react";

export default function Typewriter({
  children,
  speed = 25,
}: {
  children: ReactNode;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState<ReactNode[]>([]);

  useEffect(() => {
    // Flatten children into characters + elements
    const traverse = (child: any): ReactNode[] => {
      if (typeof child === "string") {
        return child.split("").map((char, i) => <span key={Math.random()}>{char}</span>);
      }
      if (Array.isArray(child)) {
        return child.flatMap(traverse);
      }
      if (child?.type === "br") {
        return [<br key={Math.random()} />];
      }
      if (child?.props?.children) {
        // Recurse through nested children (like <span>…</span>)
        const inner = traverse(child.props.children);
        return [
          // ✅ Use React.createElement so TypeScript sees this as valid ReactNode
          React.createElement(child.type, { ...child.props, key: Math.random() }, inner),
        ];
      }
      return [];
    };

    const flat = traverse(children);
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(flat.slice(0, i + 1));
      i++;
      if (i >= flat.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  return <p>{displayed}</p>;
}

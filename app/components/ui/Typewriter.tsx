"use client";
import React, { useState, useEffect, ReactNode, ReactElement } from "react";

export default function Typewriter({
  children,
  speed = 25,
}: {
  children: ReactNode;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState<ReactNode[]>([]);

  useEffect(() => {
    const traverse = (child: ReactNode): ReactNode[] => {
      if (typeof child === "string") {
        return child.split("").map((char) => <span key={Math.random()}>{char}</span>);
      }
      if (Array.isArray(child)) {
        return child.flatMap(traverse);
      }
      if (React.isValidElement(child)) {
        const element = child as ReactElement<any, any>;
        if (element.type === "br") {
          return [<br key={Math.random()} />];
        }
        const inner = traverse(element.props.children);
        return [
          React.createElement(element.type, { ...element.props, key: Math.random() }, inner),
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

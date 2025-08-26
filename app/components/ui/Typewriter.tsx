"use client";
import React, { useState, useEffect, ReactNode, ReactElement, JSXElementConstructor } from "react";

interface FlatChar {
  key: string;
  node: ReactNode;
}

export default function Typewriter({
  children,
  speed = 25,
}: {
  children: ReactNode;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState<ReactNode[]>([]);

  useEffect(() => {
    let counter = 0;

    const traverse = (child: ReactNode, path = ""): FlatChar[] => {
      if (typeof child === "string") {
        return child.split("").map((char, idx) => ({
          key: `${path}-char-${counter++}-${idx}`,
          node: <span key={`${path}-char-${counter}-${idx}`}>{char}</span>,
        }));
      }

      if (Array.isArray(child)) {
        return child.flatMap((c, idx) => traverse(c, `${path}-${idx}`));
      }

      if (React.isValidElement(child)) {
        // ✅ Replace `any` with `unknown`
        const element = child as ReactElement<Record<string, unknown>, string | JSXElementConstructor<unknown>>;

        if (element.type === "br") {
          const key = `${path}-br-${counter++}`;
          return [{ key, node: <br key={key} /> }];
        }

        const inner = traverse(element.props.children as ReactNode, `${path}-el-${counter++}`);
        const key = `${path}-el-${counter++}`;
        const props = { ...(element.props as Record<string, unknown>), key };

        return [
          {
            key,
            node: React.createElement(element.type, props, inner.map((c) => c.node)),
          },
        ];
      }

      return [];
    };

    const flat = traverse(children);
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(flat.slice(0, i + 1).map((f) => f.node));
      i++;
      if (i >= flat.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  return <p>{displayed}</p>;
}

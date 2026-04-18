"use client";

import React, { useMemo, Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { mdxComponents } from "./MDXComponents";

export function MDXRenderer({ code }: { code: string }) {
  const Component = useMemo(() => {
    const fn = new Function(code);
    return fn({ Fragment, jsx, jsxs }).default;
  }, [code]);

  return <Component components={mdxComponents} />;
}

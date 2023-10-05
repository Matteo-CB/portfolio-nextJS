import type { SectionHeadingProps } from "@/lib/types";
import React from "react";

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="mb-8 text-2xl font-medium text-center">{children}</h2>;
}

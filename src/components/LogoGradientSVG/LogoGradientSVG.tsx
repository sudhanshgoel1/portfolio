// LogoGradientSVG.tsx
import React from "react";

type Props = {
  text: string;
  height?: number;     // px height of the SVG
  className?: string;  // font family/weight via CSS
  idSuffix?: string;   // avoid duplicate <defs> ids if used multiple times
  align?: "left" | "center" | "right"; // text alignment
};

export default function LogoGradientSVG({
  text,
  height = 28,
  className,
  idSuffix = "brand",
  align = "left",
}: Props) {
  const gradId = `multiColor-${idSuffix}`;
  const shadowId = `shadow-${idSuffix}`;

  // Alignment setup
  let x = "0";
  let textAnchor: "start" | "middle" | "end" = "start";
  if (align === "center") {
    x = "50%";
    textAnchor = "middle";
  } else if (align === "right") {
    x = "100%";
    textAnchor = "end";
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width="100%" // take width of parent container
      viewBox="0 0 900 100"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7d5fff" />
          <stop offset="20%" stopColor="#188fffff" />
          <stop offset="40%" stopColor="#18dcff" />
          <stop offset="60%" stopColor="#188fffff" />
          <stop offset="80%" stopColor="#7d5fff" />
          <stop offset="100%" stopColor="#b75fffff" />
        </linearGradient>
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1.5" dy="1.5" stdDeviation="1.5" floodOpacity="0.4" />
        </filter>
      </defs>

      <text
        x={x}
        y="75"
        fontSize="72"
        fontWeight={800}
        className={className}
        textAnchor={textAnchor}
        fill={`url(#${gradId})`}
        filter={`url(#${shadowId})`}
      >
        {text}
      </text>
    </svg>
  );
}

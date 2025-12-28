// MultiShadeText.tsx
import React from "react";
import './MultiShadeText.css';

type Props = {
    text: string;
    className?: string; // e.g. "fw-bold fs-4"
};

export default function MultiShadeText({ text, className }: Props) {
    const letters = Array.from(text);

    // Get CSS variables for theme-aware colors
    const getGradientColor = (index: number) => {
        const colorVar = `--gradient-color-${index + 1}`;
        return `var(${colorVar})`;
    };

    // Color stops (offsets are 0..1). Each color fills until the next offset.
    const stops = [
        { offset: 0.0, colorIndex: 0 },   // violet
        { offset: 0.15, colorIndex: 1 },  // soft sky blue
        { offset: 0.35, colorIndex: 2 },  // bright cyan
        { offset: 0.55, colorIndex: 3 },  // sky blue again (symmetry)
        { offset: 0.8, colorIndex: 4 },   // violet
        { offset: 1.0, colorIndex: 5 },   // pink-magenta finish
    ];

    const normStops = [...stops]
        .map(s => ({
            offset: Math.min(1, Math.max(0, s.offset)),
            colorIndex: s.colorIndex,
        }))
        .sort((a, b) => a.offset - b.offset);

    // Step color: pick the color of the *current* stop until the next stop.
    const colorForIndex = (i: number, total: number) => {
        const t = total <= 1 ? 1 : i / (total - 1); // 0..1 across letters
        for (let k = 0; k < normStops.length - 1; k++) {
            const cur = normStops[k];
            const nxt = normStops[k + 1];
            if (t >= cur.offset && t < nxt.offset) return getGradientColor(cur.colorIndex);
        }
        // t === 1 (last character) -> last stop color
        return getGradientColor(normStops[normStops.length - 1].colorIndex);
    };

    return (
        <span className={`multi-shade-text ${className || ''}`}>
            {letters.map((ch, i) => (
                <span key={i} style={{ color: colorForIndex(i, letters.length) }}>
                    {ch}
                </span>
            ))}
        </span>
    );
}

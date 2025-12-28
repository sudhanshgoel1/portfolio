import React, { useState } from "react";
import "./SocialIcons.css"; // We'll define hover blur effect here
import { icons } from "../../dummyData/dummyData";

export const SocialIcons: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="d-flex gap-3 mt-3">
      {icons.map((icon) => (
        <a
          key={icon.name}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon ${icon.name !== 'facebook' && "mx-2"} my-auto ${hovered && hovered !== icon.name ? "blurred" : ""
            }`}
          onMouseEnter={() => setHovered(icon.name)}
          onMouseLeave={() => setHovered(null)}
        >
          {icon.svg}
        </a>
      ))}
    </div>
  );
};

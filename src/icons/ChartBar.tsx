/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="228"
            y1="208"
            x2="28"
            y2="208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="68"
            y="120"
            width="120"
            height="56"
            transform="translate(-20 276) rotate(-90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="156"
            y="40"
            width="56"
            height="168"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="36"
            y="144"
            width="72"
            height="56"
            transform="translate(-100 244) rotate(-90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect x="156" y="40" width="56" height="168" opacity="0.2" />
          <line
            x1="228"
            y1="208"
            x2="28"
            y2="208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="68"
            y="120"
            width="120"
            height="56"
            transform="translate(-20 276) rotate(-90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="156"
            y="40"
            width="56"
            height="168"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="36"
            y="144"
            width="72"
            height="56"
            transform="translate(-100 244) rotate(-90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M228,200h-8V40a8.00008,8.00008,0,0,0-8-8H164a8.00008,8.00008,0,0,0-8,8V200H140V80H104a7.99993,7.99993,0,0,0-8,8V200H80V128H44a7.99993,7.99993,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="228"
            y1="208"
            x2="28"
            y2="208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="68"
            y="120"
            width="120"
            height="56"
            transform="translate(-20 276) rotate(-90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="156"
            y="40"
            width="56"
            height="168"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="36"
            y="144"
            width="72"
            height="56"
            transform="translate(-100 244) rotate(-90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="228"
            y1="208"
            x2="28"
            y2="208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="68"
            y="120"
            width="120"
            height="56"
            transform="translate(-20 276) rotate(-90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="156"
            y="40"
            width="56"
            height="168"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="36"
            y="144"
            width="72"
            height="56"
            transform="translate(-100 244) rotate(-90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="228"
            y1="208"
            x2="28"
            y2="208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="68"
            y="120"
            width="120"
            height="56"
            transform="translate(-20 276) rotate(-90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="156"
            y="40"
            width="56"
            height="168"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="36"
            y="144"
            width="72"
            height="56"
            transform="translate(-100 244) rotate(-90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ChartBar = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...contextRest}
      {...rest}
    >
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

ChartBar.displayName = "ChartBar";

export default ChartBar;
import React, { PropsWithChildren } from "react";

type Props = {
  primaryColor: string;
  secColor: string;
  percent: number;
  radius: number;
  color: string | null;
};

const RangeSVG = ({
  primaryColor,
  secColor,
  percent,
  radius,
  color,
}: PropsWithChildren<Props>) => {
  const strokeWidth = radius * 0.2;
  const innerRadius = radius - strokeWidth / 2;
  const circumference = innerRadius * 2 * Math.PI;
  const arc = circumference * (270 / 360);
  const dashArray = `${arc} ${circumference}`;
  const transform = `rotate(135, ${radius}, ${radius})`;
  const percentNormalized = Math.min(Math.max(percent, 0), 100);
  const offset = arc - (percentNormalized / 100) * arc;
  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        className={secColor}
        cx={radius}
        cy={radius}
        fill="transparent"
        r={innerRadius}
        strokeDasharray={dashArray}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        transform={transform}
      />
      <circle
        className={primaryColor}
        cx={radius}
        cy={radius}
        fill="transparent"
        r={innerRadius}
        strokeDasharray={dashArray}
        strokeDashoffset={offset}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        style={{
          transition: "stroke-dashoffset 0.3s",
          ...(color && { stroke: color }),
        }}
        transform={transform}
      />
    </svg>
  );
};

export default RangeSVG;

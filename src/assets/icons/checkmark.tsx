import React from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}
const CheckmarkIcon = (props: IconProps) => {
  const { className, style } = props;
  return (
    <svg
      className={className}
      width="17"
      height="12"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
        stroke="#E3E3E3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CheckmarkIcon;

import { Colors } from "@/constants/theme";
import Svg, { Circle } from "react-native-svg";

type ProgressCircleProps = {
  size?: number;
  strokeWidth?: number;
  progress?: number;
};

export function ProgressCircle({
  size = 72,
  strokeWidth = 10,
  progress = 0.25,
}: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <Svg width={size} height={size}>
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={Colors.light.background}
        strokeWidth={strokeWidth}
        fill="transparent"
      />

      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={Colors.light.primary}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - progress)}
        rotation={-90}
        origin={`${size / 2}, ${size / 2}`}
      />
    </Svg>
  );
}

import { Colors } from "@/constants/theme";
import { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

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

  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    animatedProgress.value = withTiming(progress, {
      duration: 800,
      easing: Easing.out(Easing.cubic),
    });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circumference * (1 - animatedProgress.value),
  }));

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

      <AnimatedCircle
        animatedProps={animatedProps}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={Colors.light.primary}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray={circumference}
        rotation={-90}
        origin={`${size / 2}, ${size / 2}`}
      />
    </Svg>
  );
}

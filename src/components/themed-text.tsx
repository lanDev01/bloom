import { StyleSheet, Text, type TextProps } from "react-native";

import { Fonts, ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "defaultBold"
    | "title"
    | "small"
    | "smallBold"
    | "subtitle";
  themeColor?: ThemeColor;
};

export function ThemedText({
  style,
  type = "default",
  themeColor,
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme[themeColor ?? "text"], fontFamily: Fonts.sans.regular },
        type === "default" && styles.default,
        type === "defaultBold" && styles.defaultBold,
        type === "title" && styles.title,
        type === "small" && styles.small,
        type === "smallBold" && styles.smallBold,
        type === "subtitle" && styles.subtitle,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontFamily: Fonts.sans.regular,
    fontSize: 14,
    lineHeight: 22,
    // Quicksand overhangs the measured box — without this the last glyph clips
    paddingRight: 2,
  },
  smallBold: {
    fontFamily: Fonts.sans.bold,
    fontSize: 14,
    lineHeight: 22,
    paddingRight: 2,
  },
  default: {
    fontFamily: Fonts.sans.medium,
    fontSize: 15,
    lineHeight: 24,
    paddingRight: 2,
  },
  defaultBold: {
    fontFamily: Fonts.sans.bold,
    fontSize: 15,
    lineHeight: 24,
    paddingRight: 2,
  },
  title: {
    fontFamily: Fonts.sans.bold,
    fontSize: 28,
    lineHeight: 36,
    paddingRight: 2,
  },
  subtitle: {
    fontFamily: Fonts.sans.semibold,
    fontSize: 20,
    lineHeight: 28,
    paddingRight: 2,
  },
});

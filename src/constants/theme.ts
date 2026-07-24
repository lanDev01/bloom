import "@/global.css";

import { Platform } from "react-native";

export const Colors = {
  light: {
    text: "#33293D",
    textSecondary: "#60646C7A", // rgba(51,41,61,0.55) equivalent tone
    textTertiary: "#33293D73", // rgba(51,41,61,0.45)
    background: "#FBF7F1",
    backgroundElement: "#FFFFFF", // cards/surfaces
    backgroundSelected: "#FFF3EC", // tinted/selected state
    backgroundOnboarding: "#F7F2FF",

    border: "#33293D0F", // rgba(51,41,61,0.06)
    divider: "#33293D0F",

    primary: "#B9A6F0", // lavender — brand/accent
    secondary: "#7FD9B0", // mint
    tertiary: "#FFC94D", // yellow
    danger: "#FF8B7E", // coral — CTA / streak / alerts

    ringTrack: "#F1ECE3",
    ringTrackAlt: "#E3DAF6",
    barTrack: "#EAE3F9",

    shadow: "#33293D0F",
  },
  dark: {
    text: "#F5F1FA",
    textSecondary: "#F5F1FA99",
    textTertiary: "#F5F1FA6B",
    background: "#1E1B26",
    backgroundElement: "#2A2534",
    backgroundSelected: "#FF8B7E24",
    backgroundOnboarding: "#241F30",

    border: "#F5F1FA14",
    divider: "#F5F1FA14",

    primary: "#B9A6F0",
    secondary: "#7FD9B0",
    tertiary: "#FFC94D",
    danger: "#FF8B7E",

    ringTrack: "#3A3345",
    ringTrackAlt: "#3A3350",
    barTrack: "#3A3350",

    shadow: "#00000066",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

/**
 * Loaded via useFonts — each weight is its own family name on native.
 * Prefer these over fontWeight with custom fonts.
 */
export const Fonts = {
  sans: {
    regular: "Quicksand",
    medium: "Quicksand-Medium",
    semibold: "Quicksand-SemiBold",
    bold: "Quicksand-Bold",
  },
  rounded: {
    regular: "Nunito",
    medium: "Nunito-Medium",
    bold: "Nunito-Bold",
  },
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  twoHalf: 12,
  three: 16,
  threeHalf: 20,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;

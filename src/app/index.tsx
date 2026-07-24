import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import {
  BottomTabInset,
  Colors,
  Fonts,
  MaxContentWidth,
  Spacing,
} from "@/constants/theme";

import { ProgressCircle } from "@/components/progress-circle";
import { Flame } from "lucide-react-native";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={header.container}>
          <ThemedView style={header.wrapper}>
            <ThemedText type="title">Bom dia, Alan!</ThemedText>

            <ThemedView style={header.badge}>
              <Flame
                size={10}
                color={Colors.light.danger}
                strokeWidth={3}
                fill={Colors.light.danger}
              />
              <ThemedText type="small" themeColor="textSecondary">
                <ThemedText type="small" style={header.badgeText}>
                  12
                </ThemedText>
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText type="small" themeColor="textSecondary">
            Vamos fechar seus hábitos de hoje?
          </ThemedText>
        </ThemedView>

        <ThemedView style={content.container}>
          <ProgressCircle progress={0.25} />
          <ThemedView style={content.wrapper}>
            <ThemedText type="defaultBold">Você está indo bem!</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              1 de 4 hábitos concluídos
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "flex-start",
    gap: Spacing.two,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
});

const header = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Spacing.one,
    paddingTop: Spacing.twoHalf,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: Spacing.one,
  },
  badge: {
    backgroundColor: Colors.light.backgroundSelected,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Spacing.four,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: Spacing.half,
  },

  badgeText: {
    fontFamily: Fonts.rounded.bold,
    color: Colors.light.danger,
  },
});

const content = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.light.backgroundElement,
    padding: Spacing.four,
    borderRadius: Spacing.four,
    gap: Spacing.four,
    marginTop: Spacing.three,
    width: "100%",
  },
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: Colors.light.backgroundElement,
  },
});

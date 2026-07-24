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
import { Book, Brain, Check, Flame } from "lucide-react-native";
import { useEffect, useState } from "react";

interface Habit {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  backgroundColor: string;
  completed: boolean;
}

export default function HomeScreen() {
  const initialListHabits: Habit[] = [
    {
      id: 3,
      name: "Ler um livro",
      description: "10 páginas por dia · 5 dias seguidos",
      icon: <Book size={16} color={Colors.light.background} strokeWidth={3} />,
      backgroundColor: Colors.light.danger,
      completed: false,
    },
    {
      id: 4,
      name: "Meditar",
      description: "10 minutos por dia · 5 dias seguidos",
      icon: <Brain size={16} color={Colors.light.background} strokeWidth={3} />,
      backgroundColor: Colors.light.tertiary,
      completed: false,
    },
  ];

  const [listHabits, setListHabits] = useState<Habit[]>(initialListHabits);
  const [habitsCompleted, setHabitsCompleted] = useState<number>(0);
  const [habitsTotal, setHabitsTotal] = useState<number>(
    initialListHabits.length,
  );
  const [habitsProgress, setHabitsProgress] = useState<number>(0);

  useEffect(() => {
    setHabitsProgress(habitsCompleted / habitsTotal);
  }, [habitsCompleted, habitsTotal]);

  useEffect(() => {
    setHabitsTotal(listHabits.length);
  }, [listHabits]);

  useEffect(() => {
    setHabitsCompleted(listHabits.filter((habit) => habit.completed).length);
  }, [listHabits]);

  function handleCompleteHabit(habitId: number) {
    setListHabits(
      listHabits.map((habit) =>
        habit.id === habitId ? { ...habit, completed: true } : habit,
      ),
    );
    setHabitsCompleted(listHabits.filter((habit) => habit.completed).length);
    setHabitsProgress(habitsCompleted / habitsTotal);
  }

  function handleUncompleteHabit(habitId: number) {
    setListHabits(
      listHabits.map((habit) =>
        habit.id === habitId ? { ...habit, completed: false } : habit,
      ),
    );
    setHabitsCompleted(listHabits.filter((habit) => habit.completed).length);
    setHabitsProgress(habitsCompleted / habitsTotal);
  }

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
          <ProgressCircle progress={habitsProgress} />
          <ThemedView style={content.wrapper}>
            <ThemedText type="defaultBold">Você está indo bem!</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {habitsCompleted} de {habitsTotal} hábitos concluídos
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedText type="defaultBold" style={content.title}>
          Seus hábitos
        </ThemedText>

        <ThemedView style={habitsStyles.container}>
          {listHabits.map((habit) => (
            <ThemedView style={habitsStyles.item} key={habit.id.toString()}>
              <ThemedView
                style={[
                  habitsStyles.itemIcon,
                  { backgroundColor: habit.backgroundColor },
                ]}
              >
                {habit.icon}
              </ThemedView>

              <ThemedView style={habitsStyles.itemContent}>
                <ThemedText type="defaultBold">{habit.name}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {habit.description}
                </ThemedText>
              </ThemedView>

              <ThemedView
                onTouchStart={() =>
                  habit.completed
                    ? handleUncompleteHabit(habit.id)
                    : handleCompleteHabit(habit.id)
                }
                style={[
                  habitsStyles.check,
                  habit.completed && habitsStyles.checkCompleted,
                ]}
              >
                {habit.completed && (
                  <Check
                    size={14}
                    color={Colors.light.background}
                    strokeWidth={3}
                  />
                )}
              </ThemedView>
            </ThemedView>
          ))}
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
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  title: {
    marginTop: Spacing.three,
  },
});

const habitsStyles = StyleSheet.create({
  container: {
    width: "100%",
    gap: Spacing.three,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.light.backgroundElement,
    padding: Spacing.three,
    borderRadius: Spacing.four,
    gap: Spacing.three,
  },
  itemContent: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  itemIcon: {
    padding: Spacing.two,
    borderRadius: Spacing.four,
  },
  check: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: Colors.light.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  checkCompleted: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },
});

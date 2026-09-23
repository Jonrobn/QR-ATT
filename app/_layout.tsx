<<<<<<< HEAD
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
=======
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
>>>>>>> 9f9625f48a7a7f55bbd484825d26f3afa1e3082b
}

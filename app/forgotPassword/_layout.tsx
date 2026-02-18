import { Stack } from 'expo-router';

export default function ForgotPasswordLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        presentation: 'card',
      }}
    >
      <Stack.Screen name="reset/index" />
      <Stack.Screen name="verify/index" />
      <Stack.Screen name="newPassword/index" />
    </Stack>
  );
}
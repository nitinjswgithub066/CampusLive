import { Stack } from 'expo-router';

export default function SignupLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // This provides the right-to-left slide animation
        animation: 'slide_from_right', 
        // Ensures the page covers the full screen
        presentation: 'card',
      }}
    >
      {/* Ensure these names match your folder names exactly */}
      <Stack.Screen name="personalDetails/index" />
      <Stack.Screen name="credentials/index" />
      <Stack.Screen name="profileDetails/index" />
    </Stack>
  );
}
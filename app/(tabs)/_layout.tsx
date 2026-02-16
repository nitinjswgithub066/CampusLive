import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* Home tab */}
      <Tabs.Screen name="index" options={{ title: 'Home' }} />

      {/* Sign In tab - Ensure path is just 'signin/index' */}
      <Tabs.Screen name="signin/index" options={{ title: 'Login' }} />

      {/* Sign Up tab - Ensure path is just 'signup/index' */}
      <Tabs.Screen name="signup/index" options={{ title: 'Register' }} />

      {/* Hide the default explore tab if you aren't using it */}
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
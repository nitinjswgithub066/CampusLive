// app/_layout.tsx

import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { queryClient } from '@/src/services/api/queryClient';
import { toastConfig } from '@/src/utils/toastConfig';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Slot />
        {/* Toast component must be last to appear on top */}
        <Toast config={toastConfig} />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
import React from 'react';
import { BaseToast, ErrorToast, InfoToast, BaseToastProps } from 'react-native-toast-message';
import { Platform } from 'react-native';

/**
 * Custom toast configuration with beautiful styling
 * Import this config in your app root (_layout.tsx)
 */
export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#10b981',
        borderLeftWidth: 6,
        backgroundColor: '#f0fdf4',
        height: Platform.OS === 'ios' ? 70 : 65,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#065f46',
      }}
      text2Style={{
        fontSize: 14,
        color: '#047857',
        fontWeight: '400',
      }}
      text2NumberOfLines={2}
    />
  ),

  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: '#ef4444',
        borderLeftWidth: 6,
        backgroundColor: '#fef2f2',
        height: Platform.OS === 'ios' ? 70 : 65,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#991b1b',
      }}
      text2Style={{
        fontSize: 14,
        color: '#dc2626',
        fontWeight: '400',
      }}
      text2NumberOfLines={2}
    />
  ),

  info: (props: BaseToastProps) => (
    <InfoToast
      {...props}
      style={{
        borderLeftColor: '#3b82f6',
        borderLeftWidth: 6,
        backgroundColor: '#eff6ff',
        height: Platform.OS === 'ios' ? 70 : 65,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#1e40af',
      }}
      text2Style={{
        fontSize: 14,
        color: '#2563eb',
        fontWeight: '400',
      }}
      text2NumberOfLines={2}
    />
  ),

  warning: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#f59e0b',
        borderLeftWidth: 6,
        backgroundColor: '#fffbeb',
        height: Platform.OS === 'ios' ? 70 : 65,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#92400e',
      }}
      text2Style={{
        fontSize: 14,
        color: '#d97706',
        fontWeight: '400',
      }}
      text2NumberOfLines={2}
    />
  ),
};

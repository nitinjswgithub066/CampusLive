import Toast from 'react-native-toast-message';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastOptions {
  type?: ToastType;
  title?: string;
  message: string;
  duration?: number;
  position?: 'top' | 'bottom';
}

/**
 * Show a toast notification to the user
 * 
 * @example
 * showToast({ message: 'Login successful!', type: 'success' });
 * showToast({ title: 'Error', message: 'Failed to load data', type: 'error' });
 */
export const showToast = ({
  type = 'info',
  title,
  message,
  duration = 3000,
  position = 'top',
}: ToastOptions): void => {
  Toast.show({
    type,
    text1: title,
    text2: message,
    position,
    visibilityTime: duration,
    autoHide: true,
    topOffset: 60,
    bottomOffset: 40,
  });
};

/**
 * Show a success toast
 */
export const showSuccessToast = (message: string, title?: string): void => {
  showToast({
    type: 'success',
    title: title || 'Success',
    message,
  });
};

/**
 * Show an error toast
 */
export const showErrorToast = (message: string, title?: string): void => {
  showToast({
    type: 'error',
    title: title || 'Error',
    message,
    duration: 4000, // Longer duration for errors
  });
};

/**
 * Show an info toast
 */
export const showInfoToast = (message: string, title?: string): void => {
  showToast({
    type: 'info',
    title: title || 'Info',
    message,
  });
};

/**
 * Show a warning toast
 */
export const showWarningToast = (message: string, title?: string): void => {
  showToast({
    type: 'warning',
    title: title || 'Warning',
    message,
    duration: 4000,
  });
};

/**
 * Hide the currently visible toast
 */
export const hideToast = (): void => {
  Toast.hide();
};

// Convenience exports
export const toast = {
  show: showToast,
  success: showSuccessToast,
  error: showErrorToast,
  info: showInfoToast,
  warning: showWarningToast,
  hide: hideToast,
};

export default toast;

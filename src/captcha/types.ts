import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export interface CaptchaProps {
  captchaLength?: number;
  background?: string;
  textColor?: string;
  refreshIcon?: ReactNode;
  captchaWrapperStyle?: ViewStyle;
}

export interface CaptchaRef {
  validateCaptcha: (input: string, refresh?: boolean) => boolean;
}

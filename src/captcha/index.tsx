import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Rect, Svg, Text as SvgText } from 'react-native-svg';
import { generateCaptcha, getRandomTransform } from '../utils/helpers';
import styles from './styles';
import type { CaptchaProps, CaptchaRef } from './types';

const Captcha = forwardRef<CaptchaRef, CaptchaProps>(
  (
    {
      captchaLength = 6,
      background = '#fff',
      textColor = '#333',
      refreshIcon,
      captchaWrapperStyle,
    }: CaptchaProps,
    ref
  ) => {
    const [randomCaptcha, setRandomCaptcha] = useState('');

    useEffect(() => {
      refreshCaptcha();
    }, []);

    const refreshCaptcha = () => {
      setRandomCaptcha(generateCaptcha(captchaLength));
    };

    const validateCaptcha = (input: string, refresh?: boolean) => {
      const check = input === randomCaptcha;
      if (!check && refresh) {
        refreshCaptcha();
      }
      return check;
    };

    useImperativeHandle(ref, () => ({
      validateCaptcha,
    }));

    return (
      <View style={styles.wrapper}>
        <View style={[styles.captchaWrapper, captchaWrapperStyle]}>
          <Svg height="60" width="200">
            <Rect x="0" y="0" width="200" height="60" fill={background} />
            {randomCaptcha.split('').map((char, index) => (
              <SvgText
                key={index}
                fontSize={24}
                x={20 + index * 30}
                y="40"
                transform={getRandomTransform()}
                fill={textColor}
              >
                {char}
              </SvgText>
            ))}
          </Svg>
        </View>

        <TouchableOpacity
          style={styles.refreshButton}
          activeOpacity={0.6}
          onPress={refreshCaptcha}
        >
          {refreshIcon ? (
            refreshIcon
          ) : (
            <Text style={styles.refreshIcon}>↺</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
);

export default React.memo(Captcha);

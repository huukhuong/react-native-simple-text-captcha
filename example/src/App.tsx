import { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import type { CaptchaRef } from 'react-native-simple-text-captcha';
import Captcha from 'react-native-simple-text-captcha';

const App = () => {
  const captchaRef = useRef<CaptchaRef>(null);

  const [captcha, setCaptcha] = useState('');
  const [validateResult, setValidateResult] = useState('');

  const validateCaptcha = () => {
    const check = captchaRef.current?.validateCaptcha(captcha);
    if (check) {
      setValidateResult('Captcha Corrected');
    } else {
      setValidateResult('Captcha Incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <Captcha ref={captchaRef} />

      <TextInput
        style={styles.input}
        value={captcha}
        onChangeText={setCaptcha}
        cursorColor={'#333'}
        placeholder="OTP"
      />

      <Text>{validateResult}</Text>

      <TouchableOpacity style={styles.button} onPress={validateCaptcha}>
        <Text style={styles.buttonText}>Validate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    height: 45,
    backgroundColor: '#3982f7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

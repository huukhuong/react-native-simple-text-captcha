import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  captchaWrapper: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 5,
    overflow: 'hidden',
  },
  refreshButton: {
    marginLeft: 10,
  },
  refreshIcon: {
    transform: [
      {
        scale: 2,
      },
    ],
  },
});

export default styles;

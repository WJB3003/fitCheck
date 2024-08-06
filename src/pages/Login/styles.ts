import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    height: '100%',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 100,
    fontWeight: 'bold',
  },
  inputContainer: {
    gap: 15,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    width: '100%',
    marginHorizontal: 'auto',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

import React from 'react';
import {
  NativeSyntheticEvent,
  SafeAreaView,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

function Login(): React.JSX.Element {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fit Check</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(ev: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setUsername(ev.nativeEvent.text)
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChange={(ev: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setPassword(ev.nativeEvent.text)
          }
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;

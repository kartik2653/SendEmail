/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import sendEmail from './assets/HandleEmail';
import {styles} from './assets/styles';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  TextInput,
  Pressable,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState('');
  const [mobileNumber, setNumber] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const updateCredentials = (newValue, type) => {
    switch (type) {
      case 'name': {
        setName(newValue);
        break;
      }
      case 'number': {
        setNumber(newValue);
        break;
      }
      case 'email': {
        setEmail(newValue);
        break;
      }
      case 'message': {
        setMessage(newValue);
        break;
      }
      default: {
        console.warn('Oops');
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        value={name}
        onChangeText={val => updateCredentials(val, 'name')}
      />
      <TextInput
        placeholder="Mobile Number"
        style={styles.textInput}
        keyboardType="number-pad"
        value={mobileNumber}
        onChangeText={val => updateCredentials(val, 'number')}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        keyboardType="email-address"
        value={email}
        onChangeText={val => updateCredentials(val, 'email')}
      />
      <TextInput
        placeholder="Message"
        style={styles.textInput}
        multiline={true}
        value={message}
        onChangeText={val => updateCredentials(val, 'message')}
      />
      <Pressable
        onPress={() => sendEmail(name, mobileNumber, email, message)}
        style={styles.pressable}>
        <View style={styles.buttonContainer}>
          <Text style={styles.button}>Submit</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

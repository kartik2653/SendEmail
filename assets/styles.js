/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 7,
    borderColor: 'black',
    width: '75%',
    borderWidth: 1,
    fontFamily: 'monospace',
    marginBottom: 7,
  },
  pressable: {
    width: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    fontFamily: 'monospace',
    width: '45%',
    backgroundColor: '#7210F5',
    borderWidth: 1,
    borderRadius: 7,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 17,
    margin: 'auto',
    paddingTop: 9,
    paddingBottom: 9,
  },
});

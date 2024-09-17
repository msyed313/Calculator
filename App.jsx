import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearInput();
    } else {
      setInput((prev) => prev + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString()); // Evaluates the expression
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };
  return (
    <View style={styles.container}>
    <View style={styles.display}>
      <Text style={styles.inputText}>{input || '0'}</Text>
      <Text style={styles.resultText}>{result}</Text>
    </View>

    <View style={styles.buttons}>
      {['C', '(', ')', '/'].map((item) => (
        <Button key={item} value={item} onPress={handlePress} />
      ))}
      {['+', '%', '-', '*'].map((item) => (
        <Button key={item} value={item} onPress={handlePress} />
      ))}
      {['=', '9', '8', '7'].map((item) => (
        <Button key={item} value={item} onPress={handlePress} />
      ))}
      {['5', '4', '3', '2'].map((item) => (
        <Button key={item} value={item} onPress={handlePress} />
      ))}
      {['1', '0'].map((item) => (
        <Button key={item} value={item} onPress={handlePress} />
      ))}
    </View>
  </View>
  )
}
const Button = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 10,
  },
  display: {
    flex: 1,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    marginBottom: 20,
    bottom:5,
  },
  inputText: {
    color: 'black',
    fontSize: 40,
    fontWeight:'500'
  },
  resultText: {
    color: 'black',
    fontSize: 40,
    marginTop: 10,
    fontWeight:'700'
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    margin: '2%',
    aspectRatio: 1,
    backgroundColor: '#7E25D7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight:'bold'
  },
});
export default App
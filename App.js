import React, { useState } from 'react';
import { StatusBar, TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  //creating arrow function 
  const onButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('error')
      }
    }
    else if (value === 'C') {
      setInput('');
      setResult('')
    } else {
      setInput(input + value)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {result}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          value={input}
          onChangeText={setInput}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.buttonContainer}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => onButtonPress(item)}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          )

        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultText: {
    fontSize: 45
  },
  inputContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  inputText: {
    fontSize: 40,
  },
  buttonContainer: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    fontSize: 40,
    width: "25%",
    height: "20%",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#ccc"
  },
  buttonText: {
    fontSize: 30
  }
});

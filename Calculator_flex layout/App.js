import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Display from './components/Display';
import Button from './components/Button';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

let states = {
  screenValue: '',
  result: '0',
  operated: false,
  point: false
}

export default function App() {

  const [screenV, setScreenV] = useState(states.screenValue)
  const [resV, setResV] = useState(states.result)

  const addDigit = (d) => {
    if (d == '+' || d == '-' || d == '/' || d == '*') {
      states.point = false
    }
    if (d == '.' && !states.point) {
      states.point = true
      states.operated = false
    }
    else if (d == '.' && states.point){
      return
    }

    if ((d == '+' || d == '-' || d == '/' || d == '*') && states.operated) {
      states.screenValue = states.result
      states.result = 0
    }
    states.screenValue += d
    setScreenV(states.screenValue)
    setResV(states.result)
    states.operated = false
  }

  const clearScreen = () => {
    states = {
      screenValue: '',
      result: '0',
      operated: false,
      point: false
    }
    setScreenV(states.screenV)
    setResV(states.result)
  }

  const operate = (expression) => {
    if (expression == 'AC') {
      clearScreen()
      return
    }
    else{
      try {
        states.result = eval(states.screenValue)
        states.operated = true
        setResV(states.result)
      }
      catch {
        states.result = "Error"
        states.operated = true
        setResV(states.result)
      }
    }
  }

  return (
    <SafeAreaView style={styles.conteiner}>
      <Text>Calculator</Text>
      <Display operation={screenV} result={resV} />
      <View style={styles.buttonsCollection} >
        <Button label="AC" ac onClick={() => { clearScreen() }}></Button>
        <Button label="/" operator onClick={() => { addDigit('/') }}></Button>
        <Button label="7" onClick={() => { addDigit('7') }}></Button>
        <Button label="8" onClick={() => { addDigit('8') }}></Button>
        <Button label="9" onClick={() => { addDigit('9') }}></Button>
        <Button label="*" operator onClick={() => { addDigit('*') }}></Button>
        <Button label="4" onClick={() => { addDigit('4') }}></Button>
        <Button label="5" onClick={() => { addDigit('5') }}></Button>
        <Button label="6" onClick={() => { addDigit('6') }}></Button>
        <Button label="-" operator onClick={() => { addDigit('-') }}></Button>
        <Button label="1" onClick={() => { addDigit('1') }}></Button>
        <Button label="2" onClick={() => { addDigit('2') }}></Button>
        <Button label="3" onClick={() => { addDigit('3') }}></Button>
        <Button label="+" operator onClick={() => { addDigit('+') }}></Button>
        <Button label="0" doubled onClick={() => { addDigit('0') }}></Button>
        <Button label="." onClick={() => { addDigit('.') }}></Button>
        <Button label="=" operator onClick={() => { operate('=') }}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonsCollection: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const UselessTextInput = () => {
//   const [text, onChangeText] = React.useState("Useless Text");
//   const [number, onChangeNumber] = React.useState(null);

// export default function App() {
//   return (
//     <SafeAreaView>
//     <TextInput
//       style={styles.input}
//       onChangeText={onChangeText}
//       value={text}
//     />
//     <TextInput
//       style={styles.input}
//       onChangeText={onChangeNumber}
//       value={number}
//       placeholder="useless placeholder"
//       keyboardType="numeric"
//     />
//   </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  onPress,
  TouchableOpacity,
  Modal
} from "react-native";

const UselessTextInput = () => {
  const [number1, onChangeNumber1] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const [result, setResult] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);


  const onPress = () => {
    if(number1 !== null){
      let changedValue = value + 1;
      setValue(changedValue);
    }
  }
  
  const checkResult = () => {
    if(number1 !== null){
      setModalVisible(true);
      let changedValue = value;
      if(number1 > changedValue){
        setResult('Sorry');
      }else{
        setResult('Congratulations!');
      }
    }else{
      alert('Vai input den!');
    }
  }

  return (
    <SafeAreaView>
      <Text style={styles.text}>Reach Your Target</Text>
      <Text style={styles.text1}>Type your goal</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="Type your goal"
        keyboardType="numeric"
      />
      <Text style={styles.text1}>Update your work</Text>
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Update your work"
        keyboardType="numeric"
      /> */}
      <View style={styles.resultView}>
      <View style={styles.textView}>
      <Text style={styles.valueText}>{value}</Text>
      </View>
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.valueText}>+</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.checkButton}
        onPress={checkResult}
      >
        <Text style={styles.checkButtonText}>Check</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => {
          onChangeNumber1(null);
          setValue(0);
        }}
      >
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
      <View style={styles.modalView}>
      <Text style={styles.modalText}>{result}</Text>
      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.checkButtonText}>Close</Text>
      </TouchableOpacity>
      </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  text: {
    paddingTop: 70,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#FF4500",
  },
  text1: {
    paddingLeft: 13,
    paddingTop: 25,
    fontWeight: "bold",
  },
  resultView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  valueText: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    // width: '50%'
  },
  button: {
    borderWidth: 1,
    width: 100,
    borderRadius: 20,
  },
  textView: {
    borderWidth: 1,
    width: 100,
    borderRadius: 20
  },
  checkButton: {
    width: '50%',
    borderWidth: 1,
    borderColor: 'tomato',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20
  },
  checkButtonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  resetButton: {
    marginTop: 20,
  },
  resetButtonText: {
    textAlign: 'center',
    color: 'blue'
  }
});

export default UselessTextInput;

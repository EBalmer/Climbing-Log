import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SessionLog from './components/sessionLog';


export default function App() {


  // fetch('http://192.168.1.97:3000/users', {method: "GET"})
  // .then((response) => {
  //   return response.json()
  // })
  // .then((myJson) => {
  //   console.log(myJson)
  // }
  // )
  // .catch((error) => {
  //   console.log(error)}
  // );

  return (
    <SessionLog />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

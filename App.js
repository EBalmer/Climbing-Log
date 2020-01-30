import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SessionLog from './components/sessionLog';

export default function App() {
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

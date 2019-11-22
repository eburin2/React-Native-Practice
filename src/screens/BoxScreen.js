import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 300,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    width: 100,
    height: 100,
    borderWidth: 3,
    backgroundColor: 'red',
    borderColor: 'red'
  },
  viewTwoStyle: {
    width: 100,
    height: 100,
    borderWidth: 3,
    backgroundColor: 'green',
    borderColor: 'green',
    marginTop: 100
  },
  viewThreeStyle: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: 'purple'
  }

});


export default BoxScreen;

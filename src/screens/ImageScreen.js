import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
  return (
    <View>
      <ImageDetail score={9} title="Beach" image={require('../../assets/beach.jpg')}/>
      <ImageDetail score={6} title="Mountain" image={require('../../assets/mountain.jpg')}/>
      <ImageDetail score={4} title="Forest" image={require('../../assets/forest.jpg')}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;

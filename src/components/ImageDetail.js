import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';


const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={image} />
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;

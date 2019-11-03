import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Sam', age: 20},
    { name: 'Henry', age: 33},
    { name: 'John', age: 29},
    { name: 'Kelly', age: 19},
    { name: 'Pig', age: 17},
    { name: 'G', age: 14},
    { name: 'WHAM', age: 54},
    { name: 'Moose', age: 28}
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
      }} />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;

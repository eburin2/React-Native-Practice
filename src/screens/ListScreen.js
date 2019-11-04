import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Sam', age: 20},
    { name: 'Henry', age: 33},
    { name: 'Sarah', age: 29},
    { name: 'Kelly', age: 19},
    { name: 'Phil', age: 17},
    { name: 'Gary', age: 14},
    { name: 'Billie', age: 54},
    { name: 'Lisa', age: 28}
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

import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const TaskListScreen = ({ navigation, route }) => {
  const [tasks, setTasks] = useState([
    { id: '1', task: 'Buy Milk' },
    { id: '2', task: 'Walk the Dog' },
  ]);

  // Detect when newTask is passed back from ToDoScreen
  useEffect(() => {
    if (route.params?.newTask) {
      const { newTask } = route.params;
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  }, [route.params?.newTask]);

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.task}</Text>}
      />
      <Button title="Add New Task" onPress={() => navigation.navigate('ToDoScreen')} />
    </View>
  );
};

export default TaskListScreen;

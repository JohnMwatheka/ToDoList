import React, { useState, useRef } from 'react';
import { View, TextInput, Button } from 'react-native';

const ToDoScreen = ({ navigation }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const addTask = () => {
    if (input.trim() === '') {
      return; // Prevent empty tasks from being added
    }

    const newTask = { id: Date.now().toString(), task: input };
    
    // Pass the new task back to TaskListScreen
    navigation.navigate('TaskList', { newTask });

    setInput(''); // Clear the input field
    inputRef.current.focus(); // Focus back on the input field
  };

  return (
    <View>
      <TextInput
        ref={inputRef}
        value={input}
        onChangeText={setInput}
        placeholder="Enter a task"
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

export default ToDoScreen;

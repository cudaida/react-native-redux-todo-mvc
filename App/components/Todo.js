/* eslint import/no-unresolved: 0 */
import React, { PropTypes } from 'react';
import CheckBox from 'react-native-checkbox';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import styles from '../styles';

const fontSize = 20;

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
  },
  remove: {
    flex: 1,
  },
  text: {
    flex: 6,
    fontSize,
  },
  centered: {
    textAlign: 'center',
  },
  checkbox: {
    flex: 1,
    height: 14,
    width: 14,
  },
  checkboxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

const Todo = ({ onToggle, onDestroy, completed, text }) => {
  const completedStyle = (completed ? styles.completed : null);

  return (
    <View style={[componentStyles.container, styles.padded]}>
      <CheckBox
        checkboxStyle={componentStyles.checkbox}
        containerStyle={componentStyles.checkboxContainer}
        style={componentStyles.item}
        label=""
        checked={completed}
        onChange={onToggle}
      />

      <Text style={[componentStyles.text, completedStyle]}>{text}</Text>

      <TouchableOpacity
        style={[componentStyles.remove, styles.backgroundTertiary]} onPress={onDestroy}
      >
        <Text style={[componentStyles.centered, styles.padded, styles.white]}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

Todo.propTypes = {
  onDestroy: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

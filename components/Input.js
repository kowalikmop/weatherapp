import { StyleSheet, TextInput } from 'react-native';
import { grey } from '../theme/colors';

const Input = props => {
  return (
    <TextInput
    style={styles.input}
    placeholder={props.text}
    keyboardType="default"
  />
  );
}

const styles = StyleSheet.create({
    input: {
        width: 263,
        height: 40,
        borderWidth: 1,
        borderColor: grey,
        color: grey,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
      },
});

export default Input;

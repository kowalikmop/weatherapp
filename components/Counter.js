import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { yellow, white, bluemajor } from '../theme/colors';


const Counter = props => {
const {text, fun} = props;


  return (
      <TouchableOpacity style={styles.buttonstyle} onPress={fun}>
          <Text style={styles.textstyle}>{text}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonstyle: {
        width: 40,
        height: 50,
        backgroundColor: yellow,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,
  },
     textstyle: {
        color: bluemajor,
        fontSize: 22,

},
});

export default Counter;

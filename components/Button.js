import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { yellow, white, bluemajor } from '../theme/colors';


const loguj = () => {
    console.log('działa')
}

const Button = () => {

  return (
      <TouchableOpacity style={
        styles.buttonstyle} onPress={loguj}>
          <Text style={
      styles.textstyle}>ZAŁÓŻ KONTO</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonstyle: {
        width: 263,
        height: 40,
        backgroundColor: yellow,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
  },
     textstyle: {
        color: bluemajor,
        fontSize: 18,
},
});

export default Button;

import { StyleSheet, Text, View } from 'react-native';
import { bluelights, bluemajor } from '../theme/colors';

const Info = () => {
  return (
 <View style={styles.view}>
     <Text style={styles.text}>Hasło powinno składać się z minimus 8 znaków, jednaj małej litery oraz cyfry.</Text>
 </View>
  );
}

const styles = StyleSheet.create({
    view: {
        width: 263,
        height: 66,
        backgroundColor: bluelights,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 20,
  },
     text: {
        color: bluemajor,
        fontSize: 12,
},
});

export default Info;

import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { white, bluemajor } from '../theme/colors';
import Counter from './Counter';

const Viewcont = () => {

  const [wynik, setWynik] = useState(0);


 const Plus = () => {
  setWynik(wynik+1)
  console.log('wynik:', wynik)
};

 const Minus = () => {
  setWynik(wynik-1)
  console.log('wynik:', wynik)
};


  return (
    <View style={styles.view}>
      <Counter text='-' fun={Minus}></Counter>
      <Text style={styles.texty}>{wynik}</Text>
      <Counter text='+' fun={Plus}></Counter>
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        width: 311,
        height: 458,
        backgroundColor: white,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

      },
      texty: {
        width: 50,
        height: 50,
        backgroundColor: bluemajor,
        fontSize: 24,
        color: white,
        borderRadius: 5,
        textAlign: "center",
        textAlignVertical: "center",
      },
});

export default Viewcont;

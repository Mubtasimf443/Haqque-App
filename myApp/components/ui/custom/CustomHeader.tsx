/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { FC, PropsWithChildren } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

interface Props {

}
const CustomHeader: FC<PropsWithChildren<Props>> = (p) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}> لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِﷺ </Text>
    </View>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({

  container: {
  
    height : 60,
    backgroundColor : "#006A0D",
    display : 'flex',
    flexDirection : 'row',
    justifyContent : "center",
    alignItems: 'center',
    marginTop : 23
    
  },
  text : {
    color : '#ffffff',
    fontSize : 25
  }
})
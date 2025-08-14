/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { FC, PropsWithChildren } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

interface Props {

}
const CustomHeader: FC<PropsWithChildren<Props>> = (p) => {
  
  return (
    <View style={styles.container}>
      
    </View>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({

  container: {
    width: Dimensions.get('screen').width,
    height : 100,
    backgroundColor : "#006A0D",
    display : 'flex',
    flexDirection : 'column',
    justifyContent : "center",
    alignItems : "center"
  }
})
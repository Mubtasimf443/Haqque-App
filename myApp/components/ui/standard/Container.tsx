/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC } from 'react';
import { View , Text , StyleSheet, Dimensions } from 'react-native';

interface Props {

}
const Container: FC<React.PropsWithChildren<Props>> = (p) => {

  return (
    <View style={styles.container}>
    {p.children}
    </View>
)
}
export default Container;

const styles= StyleSheet.create({
   container : {
    width : Dimensions.get('screen').width,
    height : 'auto',
    padding : 10
   }
})
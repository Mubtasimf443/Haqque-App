/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC } from 'react';
import { View , Text , StyleSheet, Dimensions, ScrollView } from 'react-native';

interface Props {

}
const Container: FC<React.PropsWithChildren<Props>> = (p) => {

  return (
    <ScrollView style={styles.container}>
    {p.children}
    </ScrollView>
)
}
export default Container;

const styles= StyleSheet.create({
   container : {
    display : 'flex',
    flexDirection :'row',
    flexWrap : "wrap",
    columnGap : 20,
    width : Dimensions.get('screen').width,
    height : 'auto',
    padding : 10
   }
})
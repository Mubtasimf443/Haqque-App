/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { FC, PropsWithChildren } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

interface Props {

}
const CustomHeader: FC<PropsWithChildren<Props>> = ({ }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/m.jpg')} style={styles.img} />
    </View>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height : 50
  },
  container: {
    width: Dimensions.get('screen').width
  }
})
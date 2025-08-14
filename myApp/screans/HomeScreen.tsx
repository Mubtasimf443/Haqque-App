/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { View, Text, StyleSheet, Pressable, Button, TouchableOpacity } from 'react-native';
import Container from '../components/ui/standard/Container';
import Book from '../components/ui/standard/Book';

interface Props {

}
const HomeScreen = ({ }: Props) => {
  let arr = [0,1,2,3,4,5,6,7,8,9]
  return (
    <Container >
      {
        arr.map((el , key) =>(  <Book key={key} title={5445* Math.random()} views='34'/> ))
      }
    </Container>
  );
}

export default HomeScreen
const styles = StyleSheet.create({
  Container : {
   
    justifyContent : 'center'
  }
});
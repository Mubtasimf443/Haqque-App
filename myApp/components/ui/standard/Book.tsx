/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { Image } from 'expo-image';
import React from 'react'
import { Pressable, ScrollView, View , Text, StyleSheet} from 'react-native';

const Book = () => {
  return (
    <ScrollView style={styles.card}>
      <View style={styles.cardHeader}>
        <Image  />
      </View>
      <View>
        <Pressable><Text>Like</Text></Pressable>
        <Pressable><Text>Love</Text></Pressable>
        <Pressable><Text>Dislike</Text></Pressable>
        <Pressable><Text>Download</Text></Pressable>
      </View>
    </ScrollView>
  )
}

export default Book;

const styles = StyleSheet.create({
  card : {
    width : 150,
    height : "auto"
  },
  cardHeader : {
    width : 150,
    
  }
})

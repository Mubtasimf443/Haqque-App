
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { FontAwesome } from '@expo/vector-icons';
import { FC } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

interface Props {
  title: string;
  views: string

}
const Book: FC<Props> = ({ title, views }) => {

  return (
    <View style={styles.container}>
      <Image 
      source={{ uri:"https://img.icons8.com/papercut/100/book.png"}} 
      style={{width : 180, height : 300 ,objectFit : "contain" }}
      />
      <ScrollView>
        <View >
          <View>
            <Text>{title}</Text>
          </View>
          <View>
            <FontAwesome name={'street-view'} size={25} />
            <Text>{views}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text>  Love</Text>
          
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>  Download</Text>  
          </TouchableOpacity>
          <View>
            <Text>
              Read
            </Text>

          </View>
        </View>
      </ScrollView>
    </View>
  )
}
export default Book;

const styles = StyleSheet.create({
  container: {
    backgroundColor : "#ffffff",
    color: 'black',
    width: 360,
    height: 300,
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap"
  },
  img: {
    width: 100,
    height: "auto",

  }
})
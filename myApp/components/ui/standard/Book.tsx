
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { FontAwesome, FontAwesome5, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { FC } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';


interface Props {
  title: string;
  views: string;
  writter: string
  imageUri?: string
  read: number
}
const Book: FC<Props> = ({ title, views, writter, imageUri, read }) => {

  return (
    <Card style={styles.container}>
      <Card.Cover
        source={{ uri: imageUri || "https://img.icons8.com/ios/100/book--v2.png" }}
      />
      <Card.Title
        title={title}
        subtitle={writter}
      />
      <Card.Content>
        <View style={{...styles.between }}>

          <Text style={styles.txt}>
            <MaterialCommunityIcons size={21} name={'bookmark-check'} />
            {read}
          </Text>
          <TouchableOpacity>
            <MaterialIcons size={21} name={'download'} />
          </TouchableOpacity>

        </View>
        <View></View>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    maxWidth: 'auto',
    color: "#000000",
    width : 235
  },
  txt : {
    color : "Black",
    fontSize : 20
  },
  between: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
export default Book;


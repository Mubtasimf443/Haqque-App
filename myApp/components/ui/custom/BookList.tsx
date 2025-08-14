/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { FC, PropsWithChildren } from 'react';
import { View , Text , StyleSheet, Dimensions } from 'react-native';

interface Props {
    title : string;

}


const BookList :FC<PropsWithChildren<Props>>= ({ title }) => {

    return (
        <View style={styles.container}>
            {/* Heading */}
            <View style={styles.between}>
                <Text>{title}</Text>
                <Text>View All</Text>
            </View>
            {/* Books */}
            
        </View>
    );
}
export default BookList;

const styles= StyleSheet.create({
   container : {
    display : "flex",
    flexDirection : 'column',
    width : Dimensions.get('window').width * 0.95,
    height : "auto"
   },
   between : {
     display : "flex",
    flexDirection : 'row',
    justifyContent : 'space-between'
   }
})
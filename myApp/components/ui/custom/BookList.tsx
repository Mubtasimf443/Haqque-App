/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { FC, PropsWithChildren } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { books } from '../../data/Books';
import Book from '../standard/Book';
import IBook from '../../data/Book.type';

interface Props {
    title: string;
    data: IBook[]
}




const BookList: FC<PropsWithChildren<Props>> = ({ title, data }) => {

    return (
        <View style={styles.container}>
            {/* Heading */}
            <View style={styles.between}>
                <Text>{title}</Text>
                <Text>View All</Text>
            </View>
            {/* Books */}
            <ScrollView horizontal={true}>
                {
                    data.map(function ({title , read , writter , imageUri , views}, index) {
                        return (
                            <View key={index.toString()}>
                                <Book
                                    title={title}
                                    read={read}
                                    views={views}
                                    writter={writter}
                                    imageUri={imageUri}
                                />
                            </View>

                        )
                    })
                }
            </ScrollView>
        </View>
    );
}
export default BookList;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        
        marginBottom: 10,
        marginTop: 10,
        rowGap: 10
    },
    between: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    list: {
       
    }
})
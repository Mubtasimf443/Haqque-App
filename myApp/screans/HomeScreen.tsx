/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { View, Text, StyleSheet, Pressable, Button, TouchableOpacity } from 'react-native';
import Container from '../components/ui/standard/Container';
import Book from '../components/ui/standard/Book';
import BookList from '../components/ui/custom/BookList';
import { books } from '../components/data/Books';

interface Props {

}
const HomeScreen = ({ }: Props) => {
  const islamicStudies = [
    {
      title: "Quranic Studies",
      description: "This involves learning to read and memorize the Quran (the holy book of Islam), understanding its historical context, and interpreting its verses (Tafsir)."
    },
    {
      title: "Hadith Studies",
      description: "This is the study of the sayings, actions, and approvals of Prophet Muhammad. The Hadith serves as a crucial source of guidance alongside the Quran."
    },
    {
      title: "Fiqh",
      description: "This field focuses on Islamic law, examining how legal rulings are derived from the Quran and Hadith to address all aspects of life, including worship, family matters, and financial transactions."
    },
    {
      title: "Seerah",
    },
    {
      title: "Islamic History and Civilization",
    },
    {
      title: "Aqidah and Kalam",
    }
  ];
  return (
    <Container >
       {
        islamicStudies.map( 
          (chapter , index) => <BookList title={chapter.title} key={index} data={books} />
        )}
    </Container>
  );
}

export default HomeScreen
const styles = StyleSheet.create({
  Container: {

    justifyContent: 'center'
  }
});
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createNavigatorFactory, createStaticNavigation } from '@react-navigation/native';
import Books from './pages/Search';
import { SafeAreaView, Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen : HomeScreen ,
      options : {
        headerShown : false
      }
    },
    Books : {
      screen : Books,
      options :{
        headerShown : false
      }
    }
  },
  
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
      <Navigation />
  );
}

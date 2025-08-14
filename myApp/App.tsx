/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screans/HomeScreen';
import SearchScreen from './screans/SearchScreen';
import ProfileScreen from './screans/ProfileScreen';
import { createStaticNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import ExploreScreen from './screans/ExploreScreen';
import CustomHeader from './components/ui/custom/CustomHeader';
import { StatusBar } from 'react-native';


const Tabs = createBottomTabNavigator({
  initialRouteName: "Home",
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: () => <MaterialIcons name={"home"} size={25} />,
        headerShown: false
      }
    },
    Explore: {
      screen: ExploreScreen,
      options: {
        tabBarIcon: () => <MaterialIcons name={"explore"} size={25} />,
        headerShown: false
      }
    },
    Search: {
      screen: SearchScreen,
      options: {
        tabBarIcon: () => <MaterialIcons size={25} name={"search"} />,
        headerShown: false
      }
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarIcon: () => <FontAwesome size={25} name='user' />,
        headerShown: false
      }
    }
  }
});

const rootStack = createNativeStackNavigator({
  screens: {
    Main: {
      screen: Tabs,
      options: {
        headerShown: true,
        header: () => (<CustomHeader></CustomHeader>)
      }
    }
  }
});

const Navigation = createStaticNavigation(rootStack)

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'default'}  />
      <Navigation />
    </SafeAreaProvider>
  );
}
export default App;


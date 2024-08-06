import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AddFit from './src/pages/AddFit';
import Closet from './src/pages/Closet';
import Discover from './src/pages/Discover';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return null; //<Text>{route.name}</Text>;
          },
          tabBarActiveTintColor: 'darkblue',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{header: () => null}}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{header: () => null}}
        />
        <Tab.Screen
          name="Add Fit"
          component={AddFit}
          options={{header: () => null}}
        />
        <Tab.Screen
          name="Closet"
          component={Closet}
          options={{header: () => null}}
        />
        {/* TODO: Add screen nativation so this screen isnt shown on the tabs */}
        {/* <Tab.Screen
          name="Login"
          component={Login}
          options={{header: () => null}}
        /> */}
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

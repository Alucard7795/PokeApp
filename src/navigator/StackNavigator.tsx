import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '../screens/Login/LoginScreen';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {CreateTeamScreen} from '../screens/CreateTeamScreen/CreateTeamScreen';
import {PokedexRegionScreen} from '../screens/PokedexRegionScreen/PokedexRegionScreen';

import {Region} from '../interfaces/region';
import {RegionScreen} from '../screens/RegionScreen/RegionScreen';
import {TeamScreen} from '../screens/TeamScreen/TeamScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  PokedexRegionScreen: Region;
  CreateTeamScreen: Region;
  RegionScreen: undefined;
  TeamScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="LoginScreen"
        options={{title: 'Login'}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="RegionScreen"
        options={{title: 'RegionScreen'}}
        component={RegionScreen}
      />
      <Stack.Screen
        name="PokedexRegionScreen"
        options={{title: 'Pokedexes'}}
        component={PokedexRegionScreen}
      />
      <Stack.Screen
        name="CreateTeamScreen"
        options={{title: 'Select your team'}}
        component={CreateTeamScreen}
      />
      <Stack.Screen
        name="TeamScreen"
        options={{title: 'Your Teams'}}
        component={TeamScreen}
      />
    </Stack.Navigator>
  );
};

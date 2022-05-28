import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon } from '@ui-kitten/components';

import { HomeStackNavigator } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const { Navigator, Screen } = createBottomTabNavigator();

import {
    HomeIcon, ProfileIcon
} from "./icons";

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={HomeIcon} title='HOME' />
        <BottomNavigationTab icon={ProfileIcon} title='PROFILO' />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}
        screenOptions={{
                headerShown: false,
            }}>
        <Screen name='Home' component={HomeStackNavigator} />
        <Screen name='Profile' component={ProfileScreen} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);
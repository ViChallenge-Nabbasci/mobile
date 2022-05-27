import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon } from '@ui-kitten/components';

import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const { Navigator, Screen } = createBottomTabNavigator();

import {
    HomeIcon, ProfileIcon
} from "./icons";

const UsersScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>USERS</Text>
    </Layout>
);

const OrdersScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>ORDERS</Text>
    </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={HomeIcon} title='HOME' />
        <BottomNavigationTab title='USERS' />
        <BottomNavigationTab title='ORDERS' />
        <BottomNavigationTab icon={ProfileIcon} title='PROFILO' />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}
        screenOptions={{
                headerShown: false,
            }}>
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Users' component={UsersScreen} />
        <Screen name='Orders' component={OrdersScreen} />
        <Screen name='Profile' component={ProfileScreen} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);
import React from 'react';
import { Text, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import Theme from '../../../styles/theme.style';

/* Navigation Imports */
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard';
import Wallet from '../screens/wallet';
import Activities from '../screens/activities';

/* Screens */
import ShowActivityCategories from '../screens/activities/view_activities/ShowActivityCategories';
import ActivitySetupFormView from '../screens/activities/setup_activities/ActivitySetupFormView';
import ShowActivityInfo from '../screens/activities/view_activities/ShowActivityInfo';

import { createStackNavigator } from "@react-navigation/stack";

/* Icons */
import { faCoffee, faCogs, faHome, faSnowboarding, faStar, faUserAlt, faWallet } from '@fortawesome/free-solid-svg-icons'
import Preferences from '../screens/preferences';
import Profile from '../screens/profile';
import AllActivities from '../screens/all-activities';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const ActivityStackNavigator = (props: any) => {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="Activities">
            <Stack.Screen name="Activities" component={Activities} />
            <Stack.Screen name="ShowActivityCategories" component={ShowActivityCategories} />
            <Stack.Screen name="ActivitySetupFormView" component={ActivitySetupFormView} />
            <Stack.Screen name="ShowActivityInfo" component={ShowActivityInfo} />
        </Stack.Navigator>
    );
}

function Main(props: any) {


    const tabBarOptions: any = {
        activeBackgroundColor: Theme.primary,
        inactiveBackgroundColor: Theme.primary,
        activeTintColor: Theme.black,
        inactiveTintColor: Theme.black,
        showLabel: true,
        style: {
            height: 60,
            backgroundColor: Theme.primary,
            paddingBottom: 5,
            paddingTop: 5
        }
    }

    return (
        <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <Tab.Screen name="Dashboard" children={() => <Dashboard navigation={props.navigation}></Dashboard>} />
            <Tab.Screen name="Activities" children={() => <AllActivities navigation={props.navigation}></AllActivities>} />
            <Tab.Screen name="Create" children={() => <ActivityStackNavigator navigation={props.navigation}></ActivityStackNavigator>} />
            <Tab.Screen name="Wallet" children={() => <Wallet navigation={props.navigation}></Wallet>} />
            <Tab.Screen name="Profile" children={() => <Profile navigation={props.navigation}></Profile>} />
            <Tab.Screen name="Preferences" children={() => <Preferences navigation={props.navigation}></Preferences>} />
        </Tab.Navigator>

    );
}

function screenOptions({ route }: any) {
    return {
        tabBarIcon: ({ focused, color, size }: any) => {

            if (route.name === "Dashboard") return <FontAwesomeIcon icon={faHome} size={22} />
            if (route.name === "Activities") return <FontAwesomeIcon icon={faSnowboarding} size={22} />
            if (route.name === "Create") return <FontAwesomeIcon icon={faStar} size={22} />
            if (route.name === "Wallet") return <FontAwesomeIcon icon={faWallet} size={22} />
            if (route.name === "Preferences") return <FontAwesomeIcon icon={faCogs} size={22} />
            if (route.name === "Profile") return <FontAwesomeIcon icon={faUserAlt} size={22} />

            return <FontAwesomeIcon icon={faCoffee} />
        }
    }
}

function tabBarIcon({ focused, color, size }: any) {
    return <Text>hi</Text>

}

export default Main;


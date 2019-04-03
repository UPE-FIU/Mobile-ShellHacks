import React from 'react';
import { Text, View } from 'react-native';
import style from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
} from 'react-navigation';

//Screens
import Announcements from '../screens/announcements';
import Map from '../screens/map';
import Profile from '../screens/profile';
import Schedule from '../screens/schedule';
import Sponsors from '../screens/sponsors';

//import Splash/loading screen


//create sign screen navigation


//creates a tab Navigator with the screens
const TabNavigator = createBottomTabNavigator({
    Schedule: { screen: Schedule, },
    Map: { screen: Map },
    Home: { screen: Announcements },
    Profile: { screen: Profile },
    Sponsors: { screen: Sponsors }
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;

                //choose an icon based on the route 
                if (routeName === 'Home') {
                    iconName = `ios-notifications`;

                } else if (routeName === 'Schedule') {
                    iconName = `ios-calendar`;

                } else if (routeName === 'Map') {
                    iconName = `ios-compass`;

                }
                else if (routeName === 'Profile') {
                    iconName = `ios-person`;

                } else if (routeName === 'Sponsors') {
                    iconName = `ios-heart`;

                }

                // You can return any component that you like here and it will display in the icon spot 
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),

        tabBarOptions: {
            activeTintColor: '#675C50',
            inactiveTintColor: 'rgba(0,0,0,.3)',
            showLabel: true,
            style: style.container,
        },

    }
);

//Navigation Container
const AppNavigator = createAppContainer(TabNavigator);

export default AppNavigator;

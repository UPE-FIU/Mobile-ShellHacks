import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import styles from './style'
//Screens
import Announcements from '../screens/announcements';
import Map from '../screens/map';
import Profile from '../screens/profile';
import Schedule from '../screens/schedule';
import Sponsors from '../screens/sponsors';
import Landing from '../auth/landing';
import Login from '../auth/login';

const headerStyles = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#FBEDCA',
            borderBottomWidth: 0,
        },
        headerTitleStyle: {
            fontWeight: '900',
            fontSize: 30,
            color: '#675C50',
            textAlign:'center',
            flex: 1
        },
    },
}

//Navigation Options ...(with nested child navs)
const AuthStack = createStackNavigator({ Landing: Landing, Login: Login },
    {
        initialRouteName: 'Landing',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

const SponsorsStack = createStackNavigator({
    Sponsors: {
        screen: Sponsors,
        navigationOptions: {
            headerLeft: null,
            headerTitle: "Sponsors"
        }
    }
}, headerStyles);

const HomeStack = createStackNavigator({
    Home: {
        screen: Announcements,
        navigationOptions: {
            headerLeft: null,
            headerTitle: "Announcements"
        }
    }
}, headerStyles);

const MapStack = createStackNavigator({
    Map: {
        screen: Map,
        navigationOptions: {
            headerLeft: null,
            headerTitle: "Map"
        }
    }
}, headerStyles);

const ScheduleStack = createStackNavigator({
    Schedule: {
        screen: Schedule,
        navigationOptions: {
            headerLeft: null,
            headerTitle: "Schedule"
        }
    }
}, headerStyles);

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerLeft: null,
            headerTitle: "Profile"
        }
    }
}, headerStyles);
//^^^^the above mess is a hack because TabNavigation does not have a header title prop


//creates a tab Navigator with the screens
const AppStack = createBottomTabNavigator({
    Schedule: { screen: ScheduleStack, },
    Map: { screen: MapStack },
    Home: { screen: HomeStack },
    Profile: { screen: ProfileStack },
    Sponsors: { screen: SponsorsStack }
}, {
        initialRouteName: 'Home',

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
            style: styles.container,
        },

    }
);

//App Navigations 
export default AppNavigator = createAppContainer(createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack
    },
    {
        initialRouteName: 'Auth'
    }
));


import React from 'react';
// componentes
import Home from './screens/Home';
import Transacciones from './screens/Transacciones';
import UserProfile from './screens/userProfile/UserProfile';
import DatosPersonales from './screens/userProfile/DatosPersonales';
import Contactos from './screens/Contactos';
// react navigation
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// icons
import Recargar from './screens/recargar/Recargar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
const SettingsStack = createStackNavigator();

export default function Footer() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
    //   style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color}/>
          ),
        }}>
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen name="Home" component={Home} />
            <SettingsStack.Screen name="Recargar" component={Recargar} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Transacciones"
        component={Transacciones}
        options={{
          tabBarLabel: 'Transacciones',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" size={26} color={color}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={26} color={color}/>
          ),
        }}>
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen name="UserProfile" component={UserProfile}/>
            <SettingsStack.Screen name="DatosPersonales" component={DatosPersonales}/>
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Contactos"
        component={Contactos}
        options={{
          tabBarLabel: 'Contactos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-plus" size={26} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
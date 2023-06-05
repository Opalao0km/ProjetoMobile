import { AntDesign, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ScreenPerfil, ScreenCamera, ScreenLocation } from "../screens"
import { colors } from '../styles/colors';
type TabParamList = {
  Perfil: undefined
  Camera: undefined
  Location: undefined
};
type TabScreenNavigationProp = BottomTabNavigationProp <TabParamList, "Perfil">
export type TabTypes = {
  navigation: TabScreenNavigationProp
}


export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: colors.white
      }}
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (
            <Ionicons name='person' color={colors.white} size={24} />
          )
        }}      
      />
      <Tab.Screen name='Camera' component={ScreenCamera}
        options={{
          tabBarIcon: () => (
            <FontAwesome name='camera' size={24} color={colors.white} />
          )
        }}
      />
      <Tab.Screen name='Location' component={ScreenLocation}
        options={{
          tabBarIcon: () => (
            <Entypo name='location' color={colors.white} size={24}/>
          )
        }}
      />
    </Tab.Navigator>
  );
}
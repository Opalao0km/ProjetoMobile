import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import { ScreenCamera, ScreenPerfil } from "../screens"
import { colors } from '../styles/colors';
type DrawerParamList = {
  Perfil: undefined
  Camera: undefined
};
type DrawerScreenNavigationProp = DrawerNavigationProp <DrawerParamList, "Perfil">
export type DrawerTypes = {
  navigation: DrawerScreenNavigationProp
}


export function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          drawerIcon: () => (
            <Ionicons name='person' size={24} color={colors.white} />
          )
        }}
      />
      <Drawer.Screen name="Camera" component={ScreenCamera} 
        options={{
          drawerIcon: () => (
            <FontAwesome name='camera' size={24} color={colors.white} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}
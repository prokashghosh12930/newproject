import * as React from 'react';
import { NavigationContainer, DarkTheme, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/NavigationTypes';
import * as Routes from './Routes';
import * as Screens from '../screens'

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#fff' },
          }}
          initialRouteName={Routes.LOADING_SCREEN}>
          <RootStack.Screen name={Routes.LOGIN} component={Screens.LoginScreen} />
          <RootStack.Screen name={Routes.LOGOUT} component={Screens.LogoutScreen} /> 
          <RootStack.Screen name={Routes.SIGN_UP} component={Screens.SignupScreen} /> 
          <RootStack.Screen name={Routes.LOADING_SCREEN} component={Screens.LoadingScreen} /> 
          <RootStack.Screen name={Routes.PRODUCT_LIST} component={Screens.ProductListScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default RootNavigation;
  
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import myDrawer from './myDrawer';
import LoginScreen from './screens/Login';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={myDrawer} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>







  );
};

export default App;

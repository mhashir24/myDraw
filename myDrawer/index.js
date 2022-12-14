import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home';
import DrawerComponent from '../component/drawerComponent';


const Drawer = createDrawerNavigator();

const myDrawer = () => {
    return (
        <Drawer.Navigator  
            drawerContent={props => <DrawerComponent {...props} />}
            initialRouteName="Home">
            <Drawer.Screen name="Home Screen" component={HomeScreen} />
        </Drawer.Navigator>
    );
}

export default myDrawer;

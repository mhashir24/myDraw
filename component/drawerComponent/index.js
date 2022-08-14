import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DrawerComponent = ({ }) => {
    let navigation = useNavigation()

  return (

    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>
            {'Avengers'}
        </Text>
        </TouchableOpacity>
    </View>



  );
};

export default DrawerComponent;

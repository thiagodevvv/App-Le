
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Lista from './pages/components/list'


const Stack = createStackNavigator()

function App () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Lista">
                <Stack.Screen name="Lista" component={Lista} 
                options={
                    {title: 'App da Le',
                    headerTintColor: 'yellow',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerStyle: {
                        backgroundColor: 'black'
                    }}
                } 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App
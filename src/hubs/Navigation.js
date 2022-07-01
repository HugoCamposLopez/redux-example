import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/Home/HomeScreen'
import Profile from '../Screens/Home/Profile'
import Redux from '../Screens/Redux/Redux'

const Navigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Redux' component={Redux} />
    </Stack.Navigator>
  )
}

export default Navigation
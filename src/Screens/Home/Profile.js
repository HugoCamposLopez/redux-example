import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Profile = (props) => {
  const {params} = useRoute()
  if (params){
    const {id, token} = params
    console.log(id, token)
  }
  
  console.log('EStoy en profile')
  return (
    <View>
      <Text style={{fontSize: 40, marginTop:30}}>Profile</Text>
      <Text style={{fontSize: 40, marginTop:30}}></Text>
    </View>
  )
}

export default Profile
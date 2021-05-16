import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {styles} from '../styles/styles';
export default function Profile({navigation, route}) {
  const {id, title, image, description, price} = route.params;
  return (
    <View style={{}}>
      <View style={{backgroundColor: 'gray', width: '100%'}}>
        <Image
          source={{uri: image}}
          style={{width: '100%', height: 300}}
          resizeMode="stretch"
        />
        <Text style={{padding: 3, color: 'white'}}>{title}</Text>
        <View>
          <Text style={{fontSize: 19, fontWeight: 'bold', padding: 3}}>
            $ {price}
          </Text>
        </View>
      </View>
    </View>
  );
}

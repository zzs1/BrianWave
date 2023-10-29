import React from 'react'
import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from '@react-navigation/native';

import Home from '../../../assets/Icons/home.png'
import Settings from '../../../assets/Icons/setting.png'
import Map from '../../../assets/Icons/map.png'
import User from '../../../assets/Icons/user.png'

export default function NavBar({
  navigation,
  color=''
}) {
  const { colors } = useTheme();

  return (
   <View style={{
    ...styles.navBarBody,
    backgroundColor: colors.navBG
   }}>
    <Pressable style={styles.navItem} onPress={() => navigation.push('Home')}>
      <Image source={Home} contentFit='contain' style={{width: 30, height: 30}}/>
      <Text style={{
        ...styles.navText,
        color: colors.navText
      }}>Home</Text>
    </Pressable>
    <Pressable style={styles.navItem} onPress={() => navigation.push('Home')}>
      <Image source={Map} contentFit='contain' style={{width: 30, height: 30}}/>
      <Text style={{
        ...styles.navText,
        color: colors.navText
      }}>Progression</Text>
    </Pressable>
    <Pressable style={styles.navItem} onPress={() => navigation.push('AccountPages')}>
      <Image source={User} contentFit='contain' style={{width: 30, height: 30}}/>
      <Text style={{
        ...styles.navText,
        color: colors.navText
      }}>Account</Text>
    </Pressable>
    <Pressable style={styles.navItem} onPress={() => navigation.push('Settings')}>
      <Image source={Settings} contentFit='contain' style={{width: 30, height: 30}}/>
      <Text style={{
        ...styles.navText,
        color: colors.navText
      }}>Settings</Text>
    </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
  navBarBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 400,
    height: 70,
    borderRadius: 15,
    borderBottomLeftRadius:0,
    borderBottomRightRadius: 0,
    position: 'absolute',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 1
   },
   navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
   },
  navText: {
    fontSize: 16
  }
});

import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Image } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, [moonAnimation]);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0,1],
    outputRange: ['0%', '90%']
  });

  const moonOpacity = moonAnimation.interpolate({
    inputRange: [0, 0.20, 0.4, 0.6, 1],
    outputRange: [0.8, 0.99, 1, 0.99, 0.8]
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eclipse 2024 🌒</Text>
      
      <View style={styles.sun}/>
      <Image style={styles.sunImg} source={require('./assets/Sun.png')}/>
      <View/>
      <Animated.Image style={[styles.moon, {left: moonLeft, opacity: moonOpacity}]} source={require('./assets/Moon.png')}/> 

      <View style={styles.earth} />
      <Image style={styles.earth} source={require('./assets/earth.png')}/>
      <View/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:'white',
    alignItems: 'center', // Esto centrará el elemento hijo horizontalmente en el contenedor
    justifyContent: 'flex-end',
    height:'50%',
    fontSize: 25,
  },
  moon: {
    position: 'absolute',
    bottom: '50%',
    width: 110,
    height: 110,
    borderRadius: 50,
    zIndex: 1,
  },
  sunImg: {
    position: 'absolute', 
    top: 302, 
    left: '%50', 
    width: 160, 
    height: 160, 
  },
  earth: {
    position: 'absolute', 
    top: 550, 
    left: '%50', 
    width: 450, 
    height: 450, 
  },
});

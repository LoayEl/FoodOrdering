import React from 'react';
import { Image,Text,View, StyleSheet, Platform } from 'react-native';
import {Colors} from '../../constants/Colors';
import products from '../../../assets/data/products';

const product=products[1];

import { HelloWave } from '@/src/components/HelloWave';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
<Image source={{ uri: product.image}}  style={styles.image}/>

          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
    </View>
     );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:1,
  },
  title:{
    fontSize:18, 
    fontWeight: '600',
    marginVertical:10,

  },
  price:{
    color:Colors.light.tint,
    fontWeight:'bold'
  },
  image:{
    width: '100%',
    aspectRatio:1,

  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
